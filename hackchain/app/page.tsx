import React from "react";

const HomePage = () => {
  return (
    <div className="m-32 2xl:m-52">
      <h1 className="text-center text-2xl font-semibold my-20">
        Log in to HealthChain
      </h1>
      <div className="flex justify-center">
        <form action="">
          <div className="mb-5">
            <label htmlFor="username" className="block font-semibold mb-3">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="rounded-md p-2 bg-secondary font-semibold w-[400px]"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block font-semibold mb-3">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              className="rounded-md p-2 bg-secondary font-semibold w-[400px]"
            />
          </div>
          <input type="checkbox" name="remember_me" id="remember_me" />
          <label htmlFor="remember_me" className="font-semibold ml-2 ">
            Remember me
          </label>
          <button type="submit" className="bg-blue-600 w-full py-2 rounded-md font-semibold mt-5">Login</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
