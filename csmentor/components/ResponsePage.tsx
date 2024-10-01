import React from "react";
import Query from "./Query";
import Form from "./Form";
import ResponsePara from "./Response";

const ResponsePage = ({
  query,
  setQuery,
  response,
  setResponse,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  response: string | undefined;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-4/5 lg:w-3/5 mx-auto my-10 text-[#e9e9e9]">
      <Query query={query} />
      <ResponsePara response={response} />
      <Form />
    </div>
  );
};

export default ResponsePage;
