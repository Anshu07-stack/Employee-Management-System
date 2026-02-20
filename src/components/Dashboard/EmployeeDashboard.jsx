import React from 'react'
import Header from '../../DashboardStructure/Header'
import TasklistNumbers from '../../DashboardStructure/TasklistNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#252525] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TasklistNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
