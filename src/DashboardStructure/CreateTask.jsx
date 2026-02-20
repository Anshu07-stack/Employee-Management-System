import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle,setTaskTitle] = useState('');
  const [taskDescription,setTaskDescription] = useState('');
  const [taskDate,setTaskDate] = useState('');
  const [asignTo,setAsignTo] = useState('');
  const [category,setCategory] = useState('');

  
 const submitHandler = (e)=>{
  e.preventDefault()

  const newTaskObj = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active:false,
    newTask:true,
    failed:false,
    completed:false
  }

  const data = userData
  console.log(data)
  data.forEach((elem)=>{
    if(asignTo == elem.firstname){
      elem.tasks.push(newTaskObj)
      elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      // console.log(elem)
    }
    setUserData(data)

  })
  

  localStorage.setItem('employees',JSON.stringify(data))

  setTaskTitle('')
  setTaskDescription('')
  setTaskDate('')
  setAsignTo('')
  setCategory('')
}

  return (
     <div className="mt-6 lg:mt-10 ">
        <form onSubmit={(e)=>{submitHandler(e)}} className="w-full bg-neutral-900 border border-white/10 rounded-2xl p-6 lg:p-8 space-y-6 text-white">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div className="space-y-5">

              <div className="space-y-2">
                <h3 className="text-sm text-white " >Date</h3>
                <input
                  value={taskDate}
                  onChange={(e)=>setTaskDate(e.target.value)}
                  type="date"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-white">Assign to</h3>
                <input
                  value={asignTo}
                  onChange={(e)=>setAsignTo(e.target.value)}
                  type="text"
                  placeholder="Employee name"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-white">Category</h3>
                <input
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  type="text"
                  placeholder="Design, Dev, Marketing..."
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-white">Task Title</h3>
                <input
                  value={taskTitle}
                  onChange={(e)=>setTaskTitle(e.target.value)}
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500"
                />
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col h-full space-y-2">
              <h3 className="text-sm text-white">Description</h3>

              <textarea
                value={taskDescription}
                onChange={(e)=>setTaskDescription(e.target.value)}
                rows="8"
                placeholder="Write full task details..."
                className="w-full flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none resize-none placeholder:text-neutral-500"
              ></textarea>
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-end pt-4 border-t border-white/10">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 active:scale-95 transition"
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask