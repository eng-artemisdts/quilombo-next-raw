export enum UserRole {
  ADMIN = "admin",
  NORMAL = "normal",
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  accessDeadline: Date;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
