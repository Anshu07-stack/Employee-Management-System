import React from 'react'

const TaskList = () => {
  return (
    <div
    id='tasklist'
    className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 
     flex-nowrap py-5 w-full  mt-10'> 
      <div className='shrink-0 h-full w-75 bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>16 feb 2026</h4>
            </div> 
            <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita sunt, dicta facere totam odio?</p>
      </div>

       <div className='shrink-0 h-full w-75 bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>16 feb 2026</h4>
            </div> 
            <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita sunt, dicta facere totam odio?</p>
      </div>

       <div className='shrink-0 h-full w-75 bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>16 feb 2026</h4>
            </div> 
            <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita sunt, dicta facere totam odio?</p>
      </div>

       <div className='shrink-0 h-full w-75 bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>16 feb 2026</h4>
            </div> 
            <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita sunt, dicta facere totam odio?</p>
      </div>

     
      
    </div>
  )
}

export default TaskList
