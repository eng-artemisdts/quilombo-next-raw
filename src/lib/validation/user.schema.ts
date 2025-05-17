import { z } from "zod";
import { UserRole } from "@/models/users";

export const UserSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  accessDeadline: z.coerce.date(),    
  role: z.nativeEnum(UserRole),
});
export type UserInput = z.infer<typeof UserSchema>;
