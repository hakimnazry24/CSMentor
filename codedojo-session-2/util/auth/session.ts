"use server";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const EXPIRED_DAY = 1;

const secretKey = process.env.SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

type PayloadType = {
  email: string;
  expiresAt: Date;
};

type CustomJWTPayload = JWTPayload & PayloadType;

const encrypt = async (payload: CustomJWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
};

const decrypt = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as CustomJWTPayload;
  } catch (error: any) {
    console.error(`Failed to verify session : ${error.message}`);
  }
};

const createSession = async (email: string) => {
  const expiresAt = new Date(Date.now() + EXPIRED_DAY * 24 * 60 * 60 * 1000);
  const payload: PayloadType = {
    email: email,
    expiresAt: expiresAt,
  };
  const session = await encrypt(payload);

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
};

const updateSession = async () => {
  const session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) return null;

  const expires = new Date(Date.now() + EXPIRED_DAY * 24 * 60 * 60 * 1000);

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
};

const deleteSession = () => {
  cookies().delete("session");
};

export {encrypt, decrypt, createSession, updateSession, deleteSession}