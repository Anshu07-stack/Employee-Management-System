import React from "react";

const  AcceptTask = ({data}) => {
    // console.log(data.taskTitle)
    return (
        <div className="shrink-0 h-full w-75 bg-red-400 rounded-xl p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">{data.category}</h3>
                <h4 className="text-sm text-white">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
            <p className="text-sm mt-2  text-white">
                {data.taskDescription}
            </p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm rounded text-white">
                    Mark as Completed
                </button>
                <button className="bg-red-500 py-1 px-2 text-sm rounded text-white">
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
