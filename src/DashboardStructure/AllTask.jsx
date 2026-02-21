import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Loader from '../components/loader/Loader'

const AllTask = () => {
  const [userData] = useContext(AuthContext)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (userData?.employees) {
      setLoading(false)
    }
  }, [userData])

  if (loading) {
    return <Loader size="lg" text="Loading employee data..." />
  }

  return (
    <div className='bg-[#252525] rounded p-3 sm:p-4 md:p-5 mt-4 sm:mt-5 h-48 sm:h-52 md:h-60 overflow-hidden'>
      {/* Rest of the component */}
      <div className='hidden sm:flex bg-red-400 mb-2 py-2 px-2 sm:px-3 md:px-4 rounded text-white text-xs md:text-sm'>
        <h2 className='font-semibold w-1/5'>Employee</h2>
        <h3 className='font-semibold w-1/5 text-center'>New</h3>
        <h5 className='font-semibold w-1/5 text-center'>Active</h5>
        <h5 className='font-semibold w-1/5 text-center'>Completed</h5>
        <h5 className='font-semibold w-1/5 text-center'>Failed</h5>
      </div>
      
      <div className='flex sm:hidden bg-red-400 mb-2 py-2 px-2 rounded text-white text-xs'>
        <h2 className='font-semibold w-2/5'>Employee</h2>
        <h3 className='font-semibold w-1/5 text-center'>N</h3>
        <h5 className='font-semibold w-1/5 text-center'>A</h5>
        <h5 className='font-semibold w-1/5 text-center'>C</h5>
        <h5 className='font-semibold w-1/5 text-center'>F</h5>
      </div>
      
      <div className='h-[80%] overflow-auto'>
        {userData?.employees?.map((elem, id) => (
          <div key={id} className='border border-emerald-500 mb-2 py-2 px-2 sm:px-3 md:px-4 flex justify-between rounded text-xs sm:text-sm'>
            <h2 className='w-2/5 sm:w-1/5 text-white font-medium truncate'>{elem.firstname}</h2>
            <h3 className='w-1/5 text-center text-blue-400 font-semibold'>{elem.taskNumbers.newTask}</h3>
            <h5 className='w-1/5 text-center text-yellow-400 font-semibold'>{elem.taskNumbers.active}</h5>
            <h5 className='w-1/5 text-center text-green-400 font-semibold'>{elem.taskNumbers.completed}</h5>
            <h5 className='w-1/5 text-center text-red-400 font-semibold'>{elem.taskNumbers.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask