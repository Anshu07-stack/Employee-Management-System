import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)
  console.log(authData.employees)

  return (
<div className='bg-[#252525] rounded p-5 mt-5 h-60' >
   <div 
   className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white' >
                     <h2 className='text-lg font-semibold   w-1/5 '>Employee Name</h2>
                     <h3 className='text-lg font-semibold  w-1/5'>New Tasks</h3>
                     <h5 className='text-lg font-semibold  w-1/5 '> Active Tasks</h5>
                     <h5 className='text-lg font-semibold  w-1/5 '>Completed Tasks</h5>
                     <h5 className='text-lg font-semibold  w-1/5 '>Failed Tasks</h5>
      </div>
        <div className='h-[80%] overflow-auto'>
          {authData.employees.map((elem , id)=>{
          return  <div key={id} className='border border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded' >
                     <h2 className='text-lg w-1/5 text-white font-medium'>{elem.firstname}</h2>
                     <h3 className='text-lg w-1/5 text-blue-600 font-semibold'>{elem.taskNumbers.active}</h3>
                     <h5 className='text-lg w-1/5 text-yellow-400 font-semibold'>{elem.taskNumbers.newTask}</h5>
                     <h5 className='text-lg w-1/5 text-green-400 font-semibold'>{elem.taskNumbers.completed}</h5>
                     <h5 className='text-lg w-1/5 text-red-600 font-semibold'>{elem.taskNumbers.failed}</h5>
      </div>  
          
        })}
        </div>
    </div>
  )
}

export default AllTask
