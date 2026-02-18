import React from 'react'
import Header from '../../DashboardStructure/Header'
import TasklistNumbers from '../../DashboardStructure/TasklistNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#252525] h-screen'>
      <Header data={data}/>
      <TasklistNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
