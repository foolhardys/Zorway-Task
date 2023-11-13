import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"
import { useState } from "react";
import User from '../assets/success.svg'

const Settings = () => {

  const { user, updateUser } = UserAuth()
  console.log(user);

  const [userData, setUserData] = useState(
    {
      name: '',
      email: '',
      branch: '',
      section: '',
      year: '',
      phone: '',
    }
  )

  const postUserData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, branch, section, year, phone } = userData
    const response =
      fetch(
        "https://manit-scholar-buddy-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            branch,
            section,
            year,
            phone
          })
        }
      )
    console.log(response);

    if (response) {
      alert('data stored')
      setIsFormSubmitted(true)

    } else {
      alert('fill the data')
    }

    // const userId = user.uid
    // await updateUser(userId, null, name, branch, section, year, phone);
  }

  if (isFormSubmitted) {
    return (
      <section className='min-h-screen border-2 flex items-center justify-center flex-col gap-5'>
      <img src={User} alt="User" className='h-[300px]' />
      <h2 className='text-3xl font-[500] text-gray-800'><span className='text-blue-600 font-[700]'> Profile Updated </span> !!</h2>
      <div className='flex gap-5'>
        <Link to='/account/profile'
          className="relative rounded-sm bg-gray-100 text-md font-[500] focus:outline-none focus:ring-2 hover:ring-white focus:ring-offset-2 hover:bg-gray-800 p-2 hover:text-white transition border-2 border-gray-600 shadow-md w-[120px] text-center">
          View Profile
        </Link>
      </div>

    </section>
    )
  }

  return (
    <div className='flex justify-center items-center'>
      <form className='md:w-[800px] md:p-8 p-8 w-full' method="POST" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Profile</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={userData.name}
                      onChange={postUserData}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 p-2"
                      placeholder="your name"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={userData.email}
                      onChange={postUserData}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 p-2"
                      placeholder={`${user.email}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">UID</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">{user.uid}</p>

            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">Email</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">{user.email}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    name="phone"
                    id="number"
                    type="text"
                    value={userData.phone}
                    onChange={postUserData}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="branch" className="block text-sm font-medium leading-6 text-gray-900">
                  Branch
                </label>
                <div className="mt-2">
                  <select
                    name="branch"
                    id="branch"
                    value={userData.branch}
                    onChange={postUserData}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electronics and Communication">Electronics and Communication</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Chemical">Chemical</option>
                    <option value="Civil">Civil</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                  Year
                </label>
                <div className="mt-2">
                  <select
                    name="year"
                    id="year"
                    value={userData.year}
                    onChange={postUserData}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="section" className="block text-sm font-medium leading-6 text-gray-900">
                  section
                </label>
                <div className="mt-2">
                  <select
                    name="section"
                    id="section"
                    value={userData.section}
                    onChange={postUserData}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Settings