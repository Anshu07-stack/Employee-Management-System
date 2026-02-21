import React from "react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="w-full bg-linear-to-r from-[#2a2a2a] to-[#252525] border-l-4 border-yellow-500 rounded-lg p-3 hover:shadow-lg hover:shadow-yellow-500/10 transition-all group">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-yellow-600 text-xs px-2 py-0.5 rounded-full text-white">{data.category}</span>
        <span className="text-xs text-neutral-400">{data.taskDate}</span>
      </div>
      
      <h3 className="text-white font-medium text-sm mb-1 line-clamp-1 group-hover:text-yellow-400 transition">
        {data.taskTitle}
      </h3>
      
      <p className="text-neutral-400 text-xs mb-3 line-clamp-2">
        {data.taskDescription}
      </p>
      
      <div className="flex gap-2">
        <button 
          onClick={onComplete}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-1.5 rounded-lg transition transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Complete
        </button>
        <button 
          onClick={onFail}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs py-1.5 rounded-lg transition transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Fail
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;