import React from 'react'
import Header from '../../DashboardStructure/Header'
import TasklistNumbers from '../../DashboardStructure/TasklistNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#252525] h-screen'>
      <Header/>
      <TasklistNumbers/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
