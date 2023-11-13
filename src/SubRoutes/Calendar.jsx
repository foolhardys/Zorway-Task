import React from 'react'
import img from '../assets/construction.svg'
import { Link } from 'react-router-dom'

const Calendar = () => {
  return (
    <section className='flex items-center justify-center flex-col h-screen gap-10'>
      <img src={img} alt="construction" className='h-[400px]' />
      <Link
        to='/account' className="relative rounded-sm bg-gray-100 text-md font-[500] focus:outline-none focus:ring-2 hover:ring-white focus:ring-offset-2 hover:bg-gray-800 p-2 hover:text-white transition border-2 border-gray-600 shadow-md w-[120px] text-center">
        Home
      </Link>
    </section>
  )
}

export default Calendar