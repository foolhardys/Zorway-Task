import React from 'react'
import User from '../assets/UserPic.svg'
import { UserAuth } from '../context/AuthContext'

const Home = () => {

  const { user } = UserAuth()

  return (
    <section className='min-h-screen border-2 flex items-center justify-center flex-col gap-5'>
      <img src={User} alt="User" className='h-[300px]' />
      <h2 className='text-3xl font-[500] text-gray-800'>Welcome <span className='text-blue-600 font-[700]'> {user.email} </span> !!</h2>
      <p className='text-md font-[600] text-gray-800'>UID : <span className='text-blue-600 font-[700]'> {user.uid} </span> !!</p>
    </section>
  )
}

export default Home