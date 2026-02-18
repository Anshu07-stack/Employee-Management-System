import React from "react";

const NewTask = () => {
  return (
    <div className="shrink-0 h-full w-75 bg-green-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">16 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a YT video</h2>
      <p className="text-sm mt-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita
        sunt, dicta facere totam odio?
      </p>
      <div className=" mt-4">
        <button className="">
          Accept Task
        </button>
      
      </div>
    </div>
  );
};

export default NewTask;
