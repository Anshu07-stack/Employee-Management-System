import React, { createContext, useContext, useState, useEffect } from 'react'
import { AuthContext } from './AuthProvider'

export const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [userData, setUserData] = useContext(AuthContext)

  // Load from localStorage on mount
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees && userData) {
      const parsedEmployees = JSON.parse(storedEmployees)
      setUserData(prev => ({
        ...prev,
        employees: parsedEmployees
      }))
    }
  }, [])

  const updateTaskStatus = (employeeId, taskTitle, newStatus) => {
    if (!userData?.employees) return null

    console.log('Updating task:', { employeeId, taskTitle, newStatus })

    // Create deep copy of employees
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.id === employeeId) {
        // Update the specific task
        const updatedTasks = emp.tasks.map(task => {
          if (task.taskTitle === taskTitle) {
            // Create updated task with all status flags set correctly
            const updatedTask = {
              ...task,
              // Reset all status flags first
              newTask: false,
              active: false,
              completed: false,
              failed: false,
              // Then apply the new status
              ...newStatus
            }
            return updatedTask
          }
          return task
        })

        // Calculate task numbers correctly
        const taskNumbers = {
          newTask: updatedTasks.filter(t => t.newTask === true).length,
          active: updatedTasks.filter(t => t.active === true).length,
          completed: updatedTasks.filter(t => t.completed === true).length,
          failed: updatedTasks.filter(t => t.failed === true).length
        }

        console.log('Updated tasks for employee:', updatedTasks)
        console.log('New task numbers:', taskNumbers)

        return { 
          ...emp, 
          tasks: updatedTasks, 
          taskNumbers 
        }
      }
      return emp
    })

    // Find the updated employee
    const updatedEmployee = updatedEmployees.find(emp => emp.id === employeeId)
    
    // Update state immediately
    setUserData(prev => ({
      ...prev,
      employees: updatedEmployees
    }))
    
    // Save to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    
    // Update loggedInUser in localStorage if it's the current employee
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      if (parsedUser.role === 'employee' && parsedUser.data.id === employeeId) {
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          data: updatedEmployee
        }))
      }
    }

    // Return the updated employee for immediate use
    return updatedEmployee
  }

  const createNewTask = (taskData) => {
    if (!userData?.employees) return

    const { assignTo, taskTitle, taskDescription, taskDate, category } = taskData
    
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.firstname.toLowerCase() === assignTo.toLowerCase()) {
        const newTask = {
          taskTitle,
          taskDescription,
          taskDate,
          category,
          newTask: true,
          active: false,
          completed: false,
          failed: false
        }

        const updatedTasks = [...emp.tasks, newTask]
        const taskNumbers = {
          newTask: updatedTasks.filter(t => t.newTask === true).length,
          active: updatedTasks.filter(t => t.active === true).length,
          completed: updatedTasks.filter(t => t.completed === true).length,
          failed: updatedTasks.filter(t => t.failed === true).length
        }

        return { ...emp, tasks: updatedTasks, taskNumbers }
      }
      return emp
    })

    setUserData(prev => ({
      ...prev,
      employees: updatedEmployees
    }))
    
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <TaskContext.Provider value={{ updateTaskStatus, createNewTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider