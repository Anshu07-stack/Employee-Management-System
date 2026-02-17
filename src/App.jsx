import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser] = useState(null)
  const Authdata = useContext(AuthContext)
  console.log(Authdata)

  const handleLogin = (email,password)=>{
      if(email === 'admin@me.com' && password === '123'){
        setUser('admin')
      }else if(email === 'user@me.com' && password === '123'){
        setUser('employee')
      }
      else{
        alert('invalid credentials')
      }
  }

  

  return (
    <>
      {!user && <Login handleLogin={handleLogin}/>}

       {user === 'admin' && <AdminDashboard/>}

    {user === 'employee' && <EmployeeDashboard/>}
    </>
  )
}

export default App
