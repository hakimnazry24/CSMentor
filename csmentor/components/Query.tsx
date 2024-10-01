import React from "react";

const Query = ({ query }: { query: string }) => {
  return (
    <div className="flex justify-end my-10">
      <p className="p-4 rounded-lg bg-[#302c2c] w-fit">{query}</p>
    </div>
  );
};

export default Query;
