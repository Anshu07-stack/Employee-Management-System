import React from 'react'

const CreateTask = () => {
  return (
     <div className="mt-6 lg:mt-10 ">
        <form className="w-full bg-neutral-900 border border-white/10 rounded-2xl p-6 lg:p-8 space-y-6 text-white">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div className="space-y-5">

              <div className="space-y-2">
                <h3 className="text-sm text-white " >Date</h3>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-white">Assign to</h3>
                <input
                  type="text"
                  placeholder="Employee name"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-white">Category</h3>
                <input
                  type="text"
                  placeholder="Design, Dev, Marketing..."
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-800 border border-white/10 focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm text-white">Task Title</h3>
                <input
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
