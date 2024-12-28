import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";

export const useUserAction = () => {
  const deleteUser = useUserStore((state) => state.deleteUser);

  /** ユーザーの削除 */
  const handleDelete = (id: string, username: string) => {
    deleteUser(id);
    toast(`${username}のデータを削除しました`);
  };

  return { handleDelete };
};
