import { useCallback } from "react";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";

export const useUserSelection = () => {
  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const selectedUserIds = useUserStore((state) => state.selectedUserIds);
  const toggleUserSelection = useUserStore(
    (state) => state.toggleUserSelection,
  );
  const toggleAllUsers = useUserStore((state) => state.toggleAllUsers);
  const clearSelection = useUserStore((state) => state.clearSelection);

  /** 選択したユーザーを一括削除 */
  const deleteSelectedUsers = useCallback(() => {
    selectedUserIds.forEach((id) => {
      deleteUser(id);
    });
    toast("選択したユーザーを削除しました");
    clearSelection();
  }, [selectedUserIds, deleteUser, clearSelection]);

  /** ユーザーが選択されているかどうか */
  const isSelected = useCallback(
    (userId: string) => selectedUserIds.has(userId),
    [selectedUserIds],
  );

  /** すべてのユーザーが選択されているかどうか */
  const isAllSelected =
    users.length > 0 && selectedUserIds.size === users.length;

  /** 選択されているユーザーが存在するかどうか */
  const hasSelectedUsers = selectedUserIds.size > 0;

  return {
    isSelected,
    isAllSelected,
    hasSelectedUsers,
    toggleUserSelection,
    toggleAllUsers,
    deleteSelectedUsers,
  };
};
