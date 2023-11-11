// Initialize Firebase in your React app
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const auth = getAuth();

// Example: Creating a new user account with additional information
const registerUser = async (email, password, displayName, classInfo) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile with additional information
    await updateProfile(user, { displayName });

    // Store additional information in the database
    await storeUserData(user.uid, { classInfo });
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};

