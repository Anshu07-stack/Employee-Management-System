import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser] = useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext)

  
  useEffect(()=>{
    if(Authdata){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
       const userData = JSON.parse(loggedInUser)
       setUser(userData.role)
       setLoggedInUserData(userData.data)
      }
    } 
  },[Authdata])

  const handleLogin = (email,password)=>{
      if(email === 'admin@me.com' && password === '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        return
      }
      else if(Authdata){
        const employee =  Authdata.employees.find((e)=>email == e.email && e.password == password)
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
          return
        }
        
      } 
      else{
        alert('invalid credentials')
      }
  }

  

  return (
    <>
      {!user && <Login handleLogin={handleLogin}/>}

       {user === 'admin' && <AdminDashboard/>}

    {user === 'employee' && <EmployeeDashboard data={loggedInUserData}/>}
    
    </>
  )
}

export default App
