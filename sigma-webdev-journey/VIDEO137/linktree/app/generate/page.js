import React from "react";

const Generate = () => {
  return (
    <div className="bg-[#225ac0] min-h-screen grid grid-cols-2 ">
      <div className="col1 bg-white flex justify-center items-center flex-col">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-4xl">Create your Bittree</h1>
          <div className="item">
            <h2 className="font-semibold text-2xl ">
              Setp 1: Claim your Handle
            </h2>
            <div className="mx-4">
              <input
                type="text"
                className="px-4 py-2 border-2 border-blue-500 focus:outline-blue-700 rounded-full"
                placeholder="Choose a Handle"
              />
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl ">Step 2: Add Links</h2>
            <div className="mx-4">
              <input
                type="text"
                className=" px-4 py-2 mx-2 my-2  border-2 border-blue-500 focus:outline-blue-700 rounded-full"
                placeholder="Enter link text "
              />

              <input
                type="text"
                className=" px-4 py-2  mx-2 my-2 border-2 border-blue-500 focus:outline-blue-700  rounded-full"
                placeholder="Enter link"
              />
              <button className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-full">Add Link</button>
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 3: Add Picture and Finalize
            </h2>
            <div className="mx-4 flex flex-col ">
              
              <input
                type="text"
                className=" px-4 py-2  mx-2 my-2 border-2 border-blue-500 focus:outline-blue-700  rounded-full"
                placeholder="Enter link to your picture"
              />
              <button className=" w-fit my-5 p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-full">Create your bitlink</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col2 w-full h-screen bg-[#225ac0] ">
        <img
          src="/generate.webp"
          alt="genrate-img"
          className="h-full object-contain  w-full"
        />
      </div>
    </div>
  );
};

export default Generate;
