import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/services/user.service";
import { UserSchema } from "@/lib/validation/user.schema";

enum HTTPStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parse = UserSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json({ error: parse.error.format() }, { status: HTTPStatus.BAD_REQUEST });
  }

  const user = await createUser(parse.data);
  return NextResponse.json(user, { status: HTTPStatus.CREATED });
}
