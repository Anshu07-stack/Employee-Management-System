import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Loader from './loader/Loader'

const UserSwitcher = ({ setUser, setLoggedInUserData }) => {
  const [userData] = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser)
      setCurrentUser(parsed.role)
    }
  }, [])

  const switchUser = async (role, employeeData = null) => {
    setLoading(true)
    
    //  loading
    await new Promise(resolve => setTimeout(resolve, 800))

    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser)
      if (parsed.role !== 'admin') {
        alert('Only Admin can switch users!')
        setIsOpen(false)
        setLoading(false)
        return
      }
    }

    if (role === 'admin') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else {
      setUser('employee')
      setLoggedInUserData(employeeData)
      localStorage.setItem('loggedInUser', JSON.stringify({ 
        role: 'employee', 
        data: employeeData 
      }))
    }
    setIsOpen(false)
    setLoading(false)
  }

  if (currentUser !== 'admin') {
    return null
  }

  const filteredEmployees = userData?.employees?.filter(emp =>
    emp.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  if (loading) {
    return <Loader fullScreen={true} size="md" text="Switching user..." />
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* User Switcher Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-2xl"
        >
          👥
        </button>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-neutral-800 border border-white/10 rounded-xl p-4 w-72 shadow-2xl">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold">Switch User (Admin Only)</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search employee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 mb-3 rounded-lg bg-neutral-700 border border-white/10 text-white text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            
            {/* Admin Option */}
            <button
              onClick={() => switchUser('admin')}
              className="w-full text-left px-3 py-3 hover:bg-neutral-700 rounded-lg text-white mb-2 transition bg-neutral-750 flex items-center gap-2"
            >
              <span className="text-xl">👑</span>
              <div>
                <span className="font-medium block">Admin</span>
                <span className="text-xs text-neutral-400">admin@company.com</span>
              </div>
            </button>

            <div className="border-t border-white/10 my-2"></div>

            {/* Employee Options */}
            <h4 className="text-neutral-400 text-xs px-2 mb-2">Employees ({filteredEmployees.length})</h4>
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <button
                    key={emp.id}
                    onClick={() => switchUser('employee', emp)}
                    className="w-full text-left px-3 py-2 hover:bg-neutral-700 rounded-lg text-white transition mb-1 flex items-center gap-2"
                  >
                    <span className="text-lg">👤</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium block truncate">{emp.firstname}</span>
                      <span className="text-xs text-neutral-400 truncate">{emp.email}</span>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-neutral-400 text-sm text-center py-4">No employees found</p>
              )}
            </div>

            {/* Quick Stats */}
            <div className="border-t border-white/10 mt-3 pt-3">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Total Users: {userData?.employees?.length || 0} + 1 Admin</span>
                <span className="text-emerald-400">Admin Only</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserSwitcher