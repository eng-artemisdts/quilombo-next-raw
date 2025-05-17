/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import type { User } from "@/models/users";

export async function POST(req: NextRequest) {

  const { id, role }: Pick<User, "id" | "role"> = await req.json();

  const secret: Secret = process.env.JWT_SECRET as Secret;
  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN as any, // ex: "1h"
  };

  const token = jwt.sign({ id, role }, secret, options);
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "AuthToken",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60, // 1h em segundos
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
