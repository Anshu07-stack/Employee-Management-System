import React from 'react'

const Header = ({ changeUser, data }) => {
  const logoutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser('')
  }

  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-medium text-white'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {data ? data.firstname : 'Admin'} 👋
        </span>
      </h1>
      <button
        onClick={logoutUser}
        className='bg-red-500 text-white text-lg font-medium px-3 py-2 rounded-sm hover:bg-red-600 transition'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header