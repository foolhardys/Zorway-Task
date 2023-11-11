import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

const Account = () => {

    const { user, logout } = UserAuth()
    console.log(user);
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout(user)
            navigate('/')
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h1 className="text-2xl">Account</h1>
            <p>User email: {user && user.email} </p>
            <button
                type="submit"
                onClick={handleLogout}
                className="flex w-[300px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Log Out
            </button>
        </div>
    )
}

export default Account