import { Link } from 'react-router-dom'
import User from '../assets/UserPic.svg'
import { UserAuth } from '../context/AuthContext'

const Home = () => {

  const { user } = UserAuth()

  return (
    <section className='min-h-screen border-2 flex items-center justify-center flex-col gap-5'>
      <img src={User} alt="User" className='h-[300px]' />
      <h2 className='text-3xl font-[500] text-gray-800'>Welcome <span className='text-blue-600 font-[700]'> {user.email} </span> !!</h2>
      <p className='text-md font-[600] text-gray-800'>UID : <span className='text-blue-600 font-[700]'> {user.uid} </span> !!</p>
      <div className='flex gap-5'>
        <Link to='/account/profile'
          className="relative rounded-sm bg-gray-100 text-md font-[500] focus:outline-none focus:ring-2 hover:ring-white focus:ring-offset-2 hover:bg-gray-800 p-2 hover:text-white transition border-2 border-gray-600 shadow-md w-[120px] text-center">
          View Profile
        </Link>
        <Link to='/account/settings'
          className="relative rounded-sm bg-gray-100 text-md font-[500] focus:outline-none focus:ring-2 hover:ring-white focus:ring-offset-2 hover:bg-gray-800 p-2 hover:text-white transition border-2 border-gray-600 shadow-md w-[120px] text-center">
          Update Profile
        </Link>
      </div>
    </section>
  )
}

export default Home