import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export interface AuthPayload {
  id: string;
  role: string;
}

export async function requireAuth(): Promise<AuthPayload> {
  const cookieStore = await cookies();
  const token = cookieStore.get("AuthToken")?.value;
  if (!token) {
    redirect("/acesso");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
    return payload;
  } catch {
    redirect("/acesso");
  }
}

/** Evita acesso ao /acesso quando já estiver logado */
export async function requireNoAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("AuthToken")?.value;
  if (token) {
    redirect("/arquivo");
  }
}
