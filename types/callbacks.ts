import type { BulkEditFormInput } from "@/types/schema";

export type DeleteUserHandler = (id: string, username: string) => void;
export type BulkUpdateUsersHandler = (
  users: BulkEditFormInput["users"],
) => void;
