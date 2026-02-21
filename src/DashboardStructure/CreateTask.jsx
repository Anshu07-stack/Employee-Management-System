import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { TaskContext } from '../context/TaskProvider'
import Loader from '../components/loader/Loader'

const CreateTask = () => {
  const [userData] = useContext(AuthContext)
  const { createNewTask } = useContext(TaskContext)
  const [loading, setLoading] = useState(false)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!assignTo || !taskTitle || !taskDescription || !taskDate || !category) {
      alert('Please fill all fields')
      return
    }

    const employeeExists = userData?.employees?.some(
      emp => emp.firstname.toLowerCase() === assignTo.toLowerCase()
    )

    if (!employeeExists) {
      alert('Employee not found!')
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      createNewTask({
        assignTo,
        taskTitle,
        taskDescription,
        taskDate,
        category
      })

      setTaskTitle('')
      setTaskDescription('')
      setTaskDate('')
      setAssignTo('')
      setCategory('')
      
      setLoading(false)
      alert('Task created successfully!')
    }, 1000)
  }

  if (loading) {
    return <Loader size="lg" text="Creating task..." />
  }

  return (
    <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-10">
      <form onSubmit={submitHandler} className="w-full bg-neutral-900 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6 text-white">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-4 sm:space-y-5">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xs sm:text-sm text-white">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none text-sm disabled:opacity-50"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xs sm:text-sm text-white">Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                type="text"
                placeholder="Employee name"
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500 text-sm disabled:opacity-50"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xs sm:text-sm text-white">Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design, Dev, Marketing..."
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500 text-sm disabled:opacity-50"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xs sm:text-sm text-white">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI design"
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500 text-sm disabled:opacity-50"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col space-y-1 sm:space-y-2">
            <h3 className="text-xs sm:text-sm text-white">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={window.innerWidth < 640 ? 5 : 8}
              placeholder="Write full task details..."
              disabled={loading}
              className="w-full flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none resize-none placeholder:text-neutral-500 text-sm disabled:opacity-50"
            ></textarea>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end pt-3 sm:pt-4 border-t border-white/10">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 active:scale-95 transition text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Creating...
              </>
            ) : (
              'Create Task'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask