import type { BulkUpdateFormInput } from "@/types/schema";

export type DeleteUserHandler = (id: string, username: string) => void;
export type BulkUpdateUsersHandler = (
  users: BulkUpdateFormInput["users"],
) => void;
