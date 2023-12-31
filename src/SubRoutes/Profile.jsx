import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'

const Profile = () => {
  
  const [item, setItem] = useState({})

  const { user, getDataFromFirebase, data } = UserAuth()

  useEffect(() => {
    getDataFromFirebase()

  }, []);

  useEffect(() => {
    if (data) {
      const entries = Object.entries(data);

      entries.sort((a, b) => {
        const emailA = a[1].email.toLowerCase();
        const emailB = b[1].email.toLowerCase();
        return emailA.localeCompare(emailB);
      });

      // Find the object with the specified email
      const desiredEmail = "siddhantrsen73938@gmail.com";
      const userWithEmail = entries.find(
        (item) => item[1].email === desiredEmail
      );

      console.log(userWithEmail);
      // item = userWithEmail
      setItem(userWithEmail[1]);
    }
  }, [data]);

  console.log(item);





  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='max-w-[800px] md:p-8 p-4'>
        <div className="px-4 sm:px-0">
          <h3 className="text-3xl font-semibold leading-7 text-gray-900">Scholar Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details.</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">Branch</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.branch}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">Section</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.section}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">UID</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.uid}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">Year</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.year}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">Phone number</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.phone}</dd>
            </div>
            <div className=' flex justify-start gap-10 items-center'>
              <Link to='/account/settings'
                className="relative rounded-sm bg-gray-900 text-white text-md font-[500] focus:outline-none focus:ring-2 hover:ring-white focus:ring-offset-2 hover:bg-white p-2 hover:text-gray-900 transition border-2 shadow-md w-[120px] text-center">
                Update Profile
              </Link>
              <Link to='/account'
                className="relative rounded-sm bg-gray-900 text-white text-md font-[500] focus:outline-none focus:ring-2 hover:ring-white focus:ring-offset-2 hover:bg-white p-2 hover:text-gray-900 transition border-2 shadow-md w-[120px]  text-center">
                Home
              </Link>
              <div>
                <select
                  name="language"
                  id="language"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}

export default Profile