import React, { useContext, useEffect, useState, lazy, Suspense } from 'react'
import Login from './components/Auth/Login'
import UserSwitcher from './components/UserSwitcher'
import { AuthContext } from './context/AuthProvider'
import Loader from './components/loader/Loader'

// Lazy load dashboards
const AdminDashboard = lazy(() => import('./components/Dashboard/AdminDashboard'))
const EmployeeDashboard = lazy(() => import('./components/Dashboard/EmployeeDashboard'))

const App = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [loginLoading, setLoginLoading] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser && !user) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      
      if (parsedUser.role === 'employee') {
        if (userData?.employees) {
          const freshEmployeeData = userData.employees.find(
            emp => emp.id === parsedUser.data.id
          )
          setLoggedInUserData(freshEmployeeData || parsedUser.data)
        } else {
          setLoggedInUserData(parsedUser.data)
        }
      }
    }
  }, [userData, user])

  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData?.employees) {
      const freshData = userData.employees.find(
        emp => emp.id === loggedInUserData.id
      )
      if (freshData) {
        setLoggedInUserData(freshData)
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          data: freshData
        }))
      }
    }
  }, [userData])

  const handleLogin = async (email, password) => {
    setLoginLoading(true)

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (userData?.admin && email === userData.admin[0]?.email && password === userData.admin[0]?.password) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      setLoginLoading(false)
      return
    }

    if (userData?.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        setLoginLoading(false)
        return
      }
    }

    alert('Invalid credentials')
    setLoginLoading(false)
  }

  if (loginLoading) {
    return <Loader fullScreen={true} size="xl" text="Signing in..." />
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} loginLoading={loginLoading} />}
      
      {user === 'admin' && (
        <Suspense fallback={<Loader fullScreen={true} size="xl" text="Loading Admin Dashboard..." />}>
          <AdminDashboard changeUser={setUser} />
          <UserSwitcher setUser={setUser} setLoggedInUserData={setLoggedInUserData} />
        </Suspense>
      )}
      
      {user === 'employee' && (
        <Suspense fallback={<Loader fullScreen={true} size="xl" text="Loading Employee Dashboard..." />}>
          <EmployeeDashboard 
            changeUser={setUser} 
            data={loggedInUserData}
            setData={setLoggedInUserData}
          />
        </Suspense>
      )}
    </>
  )
}

export default App