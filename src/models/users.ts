export enum UserRole {
  ADMIN = "admin",
  NORMAL = "normal",
}

export interface User {
  id: string;
  fullName: string;
  email?: string;
  accessDeadline: Date;
  role: UserRole;
  username: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
