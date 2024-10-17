"use client";

import { login } from "@/util/auth/auth";
import React, { FormEvent } from "react";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const user = await login(email, password);

      if (user) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("fail");
        setTimeout(() => {
          setStatus("idle");
        }, 2000);
      }
    } catch (error: any) {
      console.error(
        `Something wrong client side when authenticating user : ${error.message}`
      );
    } finally {
      setIsPending(false);
    }
  };
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-32 mb-4">
        Login to Dashboard
      </h1>
      <form onSubmit={handleLogin} className="flex justify-center">
        <div>
          <div className="grid grid-cols-4 mb-3 items-center">
            <label htmlFor="email" className="col-span-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="col-span-3 p-2 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center">
            <label htmlFor="password" className="col-span-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="col-span-3 p-2 rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-md bg-orange-500 text-white font-semibold mt-5"
          >
            Login
          </button>
          {status === "success" ? (
            <p className="text-green-500">Successfully logged in!</p>
          ) : status === "fail" ? (
            <p className="text-red-500">Wrong username or password</p>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
