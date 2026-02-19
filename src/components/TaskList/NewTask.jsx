import React from "react";

const NewTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 bg-green-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">{data.category}</h3>
        <h4 className="text-sm text-white">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">
       {data.taskDescription}
      </p>
      <div className=" mt-4">
        <button className="bg-blue-500 rounded font-medium py-1 px-2 text-xs text-white">
          Accept Task
        </button>
      
      </div>
    </div>
  );
};

export default NewTask;
