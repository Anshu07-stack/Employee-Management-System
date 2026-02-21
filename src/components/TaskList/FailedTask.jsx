import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="w-full bg-linear-to-r from-[#2a2a2a] to-[#252525] border-l-4 border-red-500 rounded-lg p-3 opacity-70">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full text-white">{data.category}</span>
        <span className="text-xs text-neutral-400">{data.taskDate}</span>
      </div>
      
      <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">{data.taskTitle}</h3>
      
      <p className="text-neutral-400 text-xs mb-2 line-clamp-2">
        {data.taskDescription}
      </p>
      
      <div className="flex items-center justify-end gap-1 text-red-400 text-xs">
        <span>✗</span>
        <span>Failed</span>
      </div>
    </div>
  );
};

export default FailedTask;