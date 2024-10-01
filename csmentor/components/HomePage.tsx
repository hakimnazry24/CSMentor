"use client";

import React, { FormEvent } from "react";
import Tag from "./Tag";
import { CiSearch } from "react-icons/ci";

const HomePage = ({
  handleFormSubmit,
  query,
  setQuery,
}: {
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <main>
      <div className="text-center mt-10 lg:mt-32 text-[#e9e9e9]">
        <h1 className="text-2xl xl:text-5xl font-semibold mb-3">CSMentor</h1>
        <h2 className="text-2xl  w-4/5 xl:w-2/5 mx-auto">
          Search for facts related to all Computer Science courses at Kulliyyah
          of Information and Communication Technology (KICT)
        </h2>
      </div>
      <div className="flex flex-wrap justify-center w-4/5 mx-auto gap-x-7 gap-y-4 mt-5">
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
        <Tag name="Element of Programming" courseCode="CSCI 1301" />
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="flex items-center mt-16 justify-center flex-nowrap gap-x-5">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Ask your question here ..."
            className=" p-2 bg-slate-200 rounded-md w-4/5 lg:w-2/5"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-500 h-fit w-fit p-2 rounded-full"
          >
            <CiSearch size={30} color="white" />
          </button>
        </div>
      </form>
    </main>
  );
};

export default HomePage;
