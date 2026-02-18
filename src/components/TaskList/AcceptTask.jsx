import React from "react";

const  AcceptTask = () => {
    return (
        <div className="shrink-0 h-full w-75 bg-red-400 rounded-xl p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">16 feb 2026</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a YT video</h2>
            <p className="text-sm mt-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita
                sunt, dicta facere totam odio?
            </p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm rounded">
                    Mark as Completed
                </button>
                <button className="bg-red-500 py-1 px-2 text-sm rounded">
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
