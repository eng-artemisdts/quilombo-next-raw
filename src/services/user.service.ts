import { adminDb } from "@/lib/firebase/admin";
import { Timestamp } from "firebase-admin/firestore";
import { User, UserRole } from "@/models/users";
import { UserInput } from "@/lib/validation/user.schema";

const collection = adminDb.collection("users");

export async function createUser(input: UserInput): Promise<User> {
  const now = new Date();

  const doc = await collection.add({
    fullName: input.fullName,
    email: input.email,
    accessDeadline: Timestamp.fromDate(input.accessDeadline),
    role: input.role,
    createdAt: Timestamp.fromDate(now),
    updatedAt: Timestamp.fromDate(now),
  });

  return { id: doc.id, ...input, createdAt: now, updatedAt: now };
}

export async function getUser(id: string): Promise<User | null> {
  const snap = await collection.doc(id).get();
  if (!snap.exists) return null;
  const data = snap.data()!;
  return {
    id: snap.id,
    fullName: data.fullName,
    email: data.email,
    accessDeadline: data.accessDeadline.toDate(),
    role: data.role as UserRole,
    createdAt: data.createdAt.toDate(),
    updatedAt: data.updatedAt.toDate(),
  };
}
