import { useCallback } from "react";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";
import type { DeleteUserHandler } from "@/types/callbacks";

export const useUserAction = () => {
  const deleteUser = useUserStore((state) => state.deleteUser);

  /** ユーザーの削除 */
  const handleDeleteUser: DeleteUserHandler = useCallback(
    (id: string, username: string) => {
      deleteUser(id);
      toast(`${username}のデータを削除しました`);
    },
    [deleteUser],
  );

  return { handleDeleteUser };
};
