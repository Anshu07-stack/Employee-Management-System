import React, { useState, useEffect } from 'react'
import Loader from '../components/loader/Loader'

const TasklistNumbers = ({ data }) => {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  if (!data || !data.tasks) return null

  // Calculate numbers directly from tasks
  const newTaskCount = data.tasks.filter(t => t.newTask === true).length
  const activeCount = data.tasks.filter(t => t.active === true).length
  const completedCount = data.tasks.filter(t => t.completed === true).length
  const failedCount = data.tasks.filter(t => t.failed === true).length

  if (loading) {
    return (
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10 w-full'>
        {[1,2,3,4].map(i => (
          <div key={i} className='py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl bg-neutral-800 animate-pulse'>
            <div className='h-6 sm:h-7 md:h-8 bg-neutral-700 rounded mb-2'></div>
            <div className='h-4 sm:h-5 md:h-6 bg-neutral-700 rounded w-20'></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10 w-full'>
      <div className='py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl bg-blue-600'>
        <h2 className='text-xl sm:text-2xl font-semibold text-white'>{newTaskCount}</h2>
        <h3 className='text-sm sm:text-base md:text-lg font-medium text-white'>New Task</h3>
      </div>
      <div className='py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl bg-yellow-600'>
        <h2 className='text-xl sm:text-2xl font-semibold text-white'>{activeCount}</h2>
        <h3 className='text-sm sm:text-base md:text-lg font-medium text-white'>Active</h3>
      </div>
      <div className='py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl bg-green-600'>
        <h2 className='text-xl sm:text-2xl font-semibold text-white'>{completedCount}</h2>
        <h3 className='text-sm sm:text-base md:text-lg font-medium text-white'>Completed</h3>
      </div>
      <div className='py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl bg-red-600'>
        <h2 className='text-xl sm:text-2xl font-semibold text-white'>{failedCount}</h2>
        <h3 className='text-sm sm:text-base md:text-lg font-medium text-white'>Failed</h3>
      </div>
    </div>
  )
}

export default TasklistNumbers