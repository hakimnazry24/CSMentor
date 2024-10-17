"use client";

import { logout } from "@/util/auth/auth";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-10">
      <p>You are in the dashboard page!</p>
      <button
        onClick={() => logout()}
        className="bg-red-500 font-semibold text-white rounded-md px-4 py-2 mt-10"
      >
        Log out
      </button>
    </div>
  );
};

export default DashboardPage;
