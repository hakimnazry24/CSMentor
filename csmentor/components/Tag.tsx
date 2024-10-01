import React from "react";

const Tag = ({
  name,
  courseCode,
}: {
  name: string | undefined;
  courseCode: string | undefined;
}) => {
  return (
    <button className="bg-green-400 text-sm px-4 py-2 rounded-md font-semibold text-nowrap">
      {`${courseCode} : ${name}`}
    </button>
  );
};

export default Tag;
