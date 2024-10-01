"use client";

import React, { FormEvent } from "react";
import { useState } from "react";
import ResponsePage from "@/components/ResponsePage";
import HomePage from "@/components/HomePage";

const page = () => {
  const [isFormPending, setisFormPending] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisFormPending(true);
    setIsFormSubmitted(true);

    try {
    } catch (error: any) {
      console.error(`Something wrong client-side: ${error.message}`);
    } finally {
      setisFormPending(false);
    }
  };

  if (isFormSubmitted)
    return (
      <ResponsePage
        query={query}
        setQuery={setQuery}
        response={response}
        setResponse={setResponse}
      />
    );
  else
    return (
      <HomePage
        handleFormSubmit={handleFormSubmit}
        query={query}
        setQuery={setQuery}
      />
    );
};

export default page;
