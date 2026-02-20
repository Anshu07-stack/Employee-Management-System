import React from 'react'
import Header from '../../DashboardStructure/Header'
import CreateTask from '../../DashboardStructure/CreateTask'
import AllTask from '../../DashboardStructure/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className="min-h-dvh w-full px-4 py-6 lg:p-10 overflow-hidden">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/> 
    </div>
  )
}

export default AdminDashboard
