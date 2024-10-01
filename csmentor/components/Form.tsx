import React from "react";
import { CiSearch } from "react-icons/ci";

const Form = () => {
  return (
    <form>
      <div className="flex items-center mt-16 justify-center flex-nowrap gap-x-5 ">
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Ask your question here ..."
          className=" p-3 bg-[#302c2c] rounded-md w-4/5 lg:w-3/5"
        />
        <button
          type="submit"
          className="bg-gray-500 h-fit w-fit p-2 rounded-full"
        >
          <CiSearch size={30} color="white" />
        </button>
      </div>
    </form>
  );
};

export default Form;
