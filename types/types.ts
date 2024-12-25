export type User = {
  id: string;
  name: string;
  fullName: string;
  email: string;
  status: "active" | "inactive";
  avatar: string;
  role: "admin" | "user" | null;
  createdAt: string;
  updatedAt: string;
};
