import React, { useState, useEffect } from 'react'
import Header from '../../DashboardStructure/Header'
import CreateTask from '../../DashboardStructure/CreateTask'
import AllTask from '../../DashboardStructure/AllTask'
import Loader from '../loader/Loader'

const AdminDashboard = ({ changeUser }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 500)
  }, [])

  if (loading) {
    return <Loader fullScreen={true} size="xl" text="Loading Admin Dashboard..." />
  }

  return (
    <div className="min-h-screen w-full bg-[#0d0c0c] overflow-y-auto">
      

      <div className="px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
        
        
        <Header changeUser={changeUser} />
        
        {/* Create Task Section */}
        <div className="mt-6 sm:mt-8">
          <CreateTask />
        </div>

        {/* All Tasks Section */}
        <div className="mt-8 sm:mt-10">
          <AllTask />
        </div>

        {/* Extra padding for better scroll */}
        <div className="h-8"></div>
      </div>

    </div>
  )
}

export default AdminDashboard