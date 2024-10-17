"use server";

import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "./session";

const login = async (email: string, password: string) => {
  let isAuthenticated = false;

  try {
    // use Firebase email and password authentication
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      isAuthenticated = true;
      createSession(email);
      return { user: user };
    } else {
      return null;
    }
  } catch (error: any) {
    console.error(
      `Something wrong when authenticating user : ${error.message}`
    );
  } finally {
    if (isAuthenticated) {
      redirect("/dashboard");
    }
  }
};

const logout = () => {
  deleteSession();
  redirect("/");
};

export {login, logout}
