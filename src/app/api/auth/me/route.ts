import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt, { Secret } from "jsonwebtoken";
import type { AuthPayload } from "@/lib/check-auth";

export async function GET() {  
  const cookieStore = await cookies();
  
  const token = cookieStore.get("AuthToken")?.value;
  if (!token) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as Secret
    ) as AuthPayload;

    return NextResponse.json({
      authenticated: true,
      id: payload.id,
      role: payload.role,
    });
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
