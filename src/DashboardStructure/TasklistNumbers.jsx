import React from 'react'

const TasklistNumbers = ({data}) => {
     // console.log(data)
  return (
    <div className='flex mt-10 justify-between gap-5 w-full '>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-blue-400'>
            <h2 className='text-2xl font-semibold text-white'> {data.taskNumbers.newTask} </h2>
            <h3 className='text-xl font-medium text-white'>New Task</h3>
       </div>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-green-400'>
            <h2 className='text-2xl font-semibold'> {data.taskNumbers.completed} </h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
       <div className='py-6 px-9 w-[45%] rounded-xl bg-yellow-400'>
            <h2 className='text-2xl font-semibold'> {data.taskNumbers.active} </h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
        <div className='py-6 px-9 w-[45%] rounded-xl bg-red-400'>
            <h2 className='text-2xl font-semibold'> {data.taskNumbers.failed} </h2>
            <h3 className='text-xl font-medium'>New Task</h3>
       </div>
    </div> 
  )
}

export default TasklistNumbers
