import { collection, doc, getDocs, query, setDoc, where, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { User, UserRole } from "@/models/users";
import bcrypt from "bcryptjs";

class UserService {
  private usersCol = collection(db, "users");

  private generatePassword() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  
  private async generateUsername(fullName: string): Promise<string> {
    const parts = fullName
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map(p => p.replace(/[^a-z0-9]/g, ""));
    const base = parts.join(".");
    let username = base;
    let counter = 0;

    while (true) {
      const q = query(this.usersCol, where("username", "==", username));
      const snap = await getDocs(q);
      if (snap.empty) break;
      counter += 1;
      username = `${base}${counter}`;
    }

    return username;
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public async registerUser(params: {
    fullName: string;
    email: string;    
    role: UserRole;
    accessDeadline: Date;
  }): Promise<User> {
    const { fullName, email,  role, accessDeadline } = params;
    const id = doc(this.usersCol).id;
    const username = role === UserRole.ADMIN ? email : await this.generateUsername(fullName);
    const password = this.generatePassword();
    const hashedPassword = this.hashPassword(password);

    const now = new Date();
    const userDoc = {
      id,
      fullName,
      email,
      role,
      username,
      accessDeadline: Timestamp.fromDate(accessDeadline),
      createdAt: Timestamp.fromDate(now),
      updatedAt: Timestamp.fromDate(now),
      password: hashedPassword,
    };

    await setDoc(doc(this.usersCol, id), userDoc);

    return {
      id,
      fullName,
      password,
      email,
      role,
      username,
      accessDeadline,
      createdAt: now,
      updatedAt: now,
    };
  }

  public async loginUser(
    username: string,
    password: string
  ): Promise<User> {
    if (!username || !password) {
      throw new Error("Informe username e senha.");
    }

    const q = query(this.usersCol, where("username", "==", username));
    const snap = await getDocs(q);
    if (snap.empty) {
      throw new Error("Usuário não encontrado.");
    }

    const docSnap = snap.docs[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = docSnap.data() as Record<string, any>;

    const hashed = data.password as string;
    const match = bcrypt.compareSync(password, hashed);
    if (!match) {
      throw new Error("Senha incorreta.");
    }

    const accessDeadline = (data.accessDeadline as Timestamp).toDate();
    const createdAt = (data.createdAt as Timestamp).toDate();
    const updatedAt = (data.updatedAt as Timestamp).toDate();

    return {
      id: data.id,
      fullName: data.fullName,
      email: data.email,
      role: data.role as UserRole,
      username: data.username,
      accessDeadline,
      createdAt,
      updatedAt,
    };
  }
}

export const userService = new UserService();