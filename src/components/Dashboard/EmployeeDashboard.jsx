import React, { useState, useEffect } from 'react'
import Header from '../../DashboardStructure/Header'
import TasklistNumbers from '../../DashboardStructure/TasklistNumbers'
import TaskList from '../TaskList/TaskList'
import Loader from '../loader/Loader'

const EmployeeDashboard = ({ changeUser, data, setData }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  if (loading) {
    return <Loader fullScreen={true} size="xl" text="Loading Employee Dashboard..." />
  }

  return (
    <div className="h-screen w-full bg-[#0d0c0c] flex flex-col overflow-hidden p-3 sm:p-4">
      {/* Header - Fixed height */}
      <div className="shrink-0">
        <Header changeUser={changeUser} data={data} />
      </div>

      {/* Task Numbers - Fixed height */}
      <div className="shrink-0 mt-2">
        <TasklistNumbers data={data} />
      </div>

      {/* Task List - Takes remaining space */}
      <div className="flex-1 min-h-0 mt-3">
        <TaskList data={data} setData={setData} />
      </div>
    </div>
  )
}

export default EmployeeDashboard