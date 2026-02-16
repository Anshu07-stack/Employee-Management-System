import React from 'react'

const TasklistNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full '>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-red-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-blue-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-green-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
    </div> 
  )
}

export default TasklistNumbers
