import React from "react";

const Card = () => {
  return (
    <>
      <div className="max-w-sm shadow-lg shadow-zinc-900 hover:scale-105 transition ease-in-out duration-200  h-[45vh] border-gray-200 rounded-lg  bg-orange-500">
        <img
          className="rounded-lg w-full object-cover h-[200px]"
          src="https://i.pinimg.com/564x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg"
          alt=""
        />

        <div className="ml-2 mt-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Burger King
          </h5>

          <p className="mb-3 font-normal text-zinc-700">
            Here hronological order.
          </p>
        </div>
        <div className="flex ml-2 items-center ">

        
        <select className="w-16 rounded-sm mr-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <option className="bg-orange-400" value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>

        <select className="w-16  rounded-sm mr-2" name="" id="">
            <option className="bg-orange-400" value="Half">{"Half"}</option>
            <option className="bg-orange-400" value="Full">{"Full"}</option>

        </select>
        <div className="text-md font-semibold text-zinc-700">Your Total is : 500</div>
        </div>
      </div>
    </>
  );
};

export default Card;
