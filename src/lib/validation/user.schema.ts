import { z } from "zod";

export const UserSchema = z
  .object({
    fullName: z.string().min(1),
    email: z.string().email(),
    accessDeadline: z.preprocess(
      (v) => (typeof v === "string" ? new Date(v) : v),
      z.date()
    ),
    registerType: z.enum(["admin", "editor", "viewer"]),
  })
  .transform(({ registerType, ...rest }) => ({
    ...rest,
    role: registerType,
  }));

export type UserInput = z.infer<typeof UserSchema>;
