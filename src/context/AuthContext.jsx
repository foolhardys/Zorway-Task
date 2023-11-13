import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword
} from 'firebase/auth';
import { auth, database } from '../firebase';
import { ref, set, get } from 'firebase/database';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const registerUser = async (email, password, name, branch, section, phone, year) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // await updateProfile(user, { displayName: name });
            const userRef = ref(database, `users/${user.uid}`);
            set(userRef, {
                name,
                branch,
                email,
                section,
                year,
                phone
            });
        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    };

    // const logIn = (email, password) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    const updateUser = async (userId, email, password, name, branch, section, year, phone) => {
        try {
            const user = auth.currentUser;
            if (email) {
                await updateEmail(user, email);
            }
            if (password) {
                await updatePassword(user, password);
            }

            await updateProfile(user, { displayName: name });
            const userRef = ref(database, `users/${userId}`);
            set(userRef, { name, branch, section, year, phone });
        } catch (error) {
            console.error('Error updating user information:', error.message);
        }
    };

    const logIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User logged in:', user);
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    // const logout = () => {
    //     return signOut(auth)
    // }

    const logout = async () => {
        try {
            await signOut(auth);

            console.log('User logged out');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };


    const [data, setData] = useState(null)


    const getDataFromFirebase = async () => {
        const dataRef = ref(database, 'UserData');
        try {
          const snapshot = await get(dataRef);
          if (snapshot.exists()) {
            setData(snapshot.val())
            return snapshot.val();
          } else {
            console.log('No data available');
            return null;
          }
        } catch (error) {
          console.error('Error getting data from Firebase:', error.message);
          return null;
        }
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ registerUser, user, logout, logIn, updateUser, getDataFromFirebase , data }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
