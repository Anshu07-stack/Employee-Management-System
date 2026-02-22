import React, { useContext, useState, useEffect } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import { TaskContext } from '../../context/TaskProvider'
import { AuthContext } from '../../context/AuthProvider'
import Loader from '../loader/Loader'

const TaskList = ({ data, setData }) => {
  const { updateTaskStatus } = useContext(TaskContext)
  const [userData] = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

  const handleAcceptTask = (taskTitle) => {
    setLoading(true)
    const updatedEmployee = updateTaskStatus(data.id, taskTitle, { 
      newTask: false, 
      active: true,
      completed: false,
      failed: false
    })
    
    if (updatedEmployee) {
      setData(updatedEmployee)
    }
    setTimeout(() => setLoading(false), 300)
  }

  const handleCompleteTask = (taskTitle) => {
    setLoading(true)
    const updatedEmployee = updateTaskStatus(data.id, taskTitle, { 
      newTask: false,
      active: false, 
      completed: true,
      failed: false
    })
    
    if (updatedEmployee) {
      setData(updatedEmployee)
    }
    setTimeout(() => setLoading(false), 300)
  }

  const handleFailTask = (taskTitle) => {
    setLoading(true)
    const updatedEmployee = updateTaskStatus(data.id, taskTitle, { 
      newTask: false,
      active: false, 
      completed: false,
      failed: true
    })
    
    if (updatedEmployee) {
      setData(updatedEmployee)
    }
    setTimeout(() => setLoading(false), 300)
  }

  // Separate tasks by status
  const newTasks = data?.tasks?.filter(t => t.newTask === true) || []
  const activeTasks = data?.tasks?.filter(t => t.active === true) || []
  const completedTasks = data?.tasks?.filter(t => t.completed === true) || []
  const failedTasks = data?.tasks?.filter(t => t.failed === true) || []

  // grid layout - ALWAYS show all 4 columns with empty states
  const columns = [
    {
      title: '📌 New Tasks',
      color: 'blue',
      tasks: newTasks,
      emptyMessage: 'No new tasks',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-400'
    },
    {
      title: '⚡ Active Tasks',
      color: 'yellow',
      tasks: activeTasks,
      emptyMessage: 'No active tasks',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-400'
    },
    {
      title: '✅ Completed',
      color: 'green',
      tasks: completedTasks,
      emptyMessage: 'No completed tasks',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500',
      textColor: 'text-green-400'
    },
    {
      title: '❌ Failed',
      color: 'red',
      tasks: failedTasks,
      emptyMessage: 'No failed tasks',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500',
      textColor: 'text-red-400'
    }
  ]

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader size="lg" text="Loading tasks..." />
      </div>
    )
  }

  // If no tasks at all
  if (data?.tasks?.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-neutral-400 bg-neutral-900/50 p-8 rounded-2xl border border-white/10 max-w-md mx-auto">
          <span className="text-6xl mb-4 block">📋</span>
          <p className="text-xl mb-2 font-medium">No tasks assigned</p>
          <p className="text-sm text-neutral-500">Your tasks will appear here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      {/* FORCE GRID LAYOUT - Always 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-1">
        
        {columns.map((column, idx) => (
          <div key={idx} className="space-y-3 min-w-0">
            {/* Column Header */}
            <div className="sticky top-0 bg-[#0d0c0c] py-2 z-10 flex items-center gap-2 border-b border-white/5">
              <div className={`w-1 h-6 rounded-full bg-${column.color}-500`}></div>
              <h3 className={`${column.textColor} font-semibold text-sm truncate`}>
                {column.title}
              </h3>
              <span className={`${column.bgColor} ${column.textColor} text-xs px-2 py-0.5 rounded-full ml-auto shrink-0`}>
                {column.tasks.length}
              </span>
            </div>
            
            {/* Tasks or Empty State */}
            <div className="space-y-3">
              {column.tasks.length > 0 ? (
                column.tasks.map((task, taskIdx) => {
                  if (column.color === 'blue') {
                    return (
                      <NewTask 
                        key={`new-${taskIdx}-${task.taskTitle}`} 
                        data={task} 
                        onAccept={() => handleAcceptTask(task.taskTitle)}
                      />
                    )
                  }
                  if (column.color === 'yellow') {
                    return (
                      <AcceptTask 
                        key={`active-${taskIdx}-${task.taskTitle}`} 
                        data={task}
                        onComplete={() => handleCompleteTask(task.taskTitle)}
                        onFail={() => handleFailTask(task.taskTitle)}
                      />
                    )
                  }
                  if (column.color === 'green') {
                    return (
                      <CompleteTask 
                        key={`completed-${taskIdx}-${task.taskTitle}`} 
                        data={task} 
                      />
                    )
                  }
                  if (column.color === 'red') {
                    return (
                      <FailedTask 
                        key={`failed-${taskIdx}-${task.taskTitle}`} 
                        data={task} 
                      />
                    )
                  }
                  return null
                })
              ) : (
                <div className={`${column.bgColor} rounded-lg p-6 text-center border border-dashed ${column.borderColor} border-opacity-30`}>
                  <p className={`${column.textColor} text-sm opacity-60`}>
                    {column.emptyMessage}
                  </p>
                  <p className="text-neutral-600 text-xs mt-2">
                    ────
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TaskList