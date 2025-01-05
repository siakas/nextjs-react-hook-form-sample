import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";

export const useUserSelection = () => {
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(
    new Set(),
  );
  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);

  /** 個別のユーザー選択を切り替え */
  const toggleUserSelection = useCallback((userId: string) => {
    setSelectedUserIds((prev) => {
      // 前の状態を複製
      const next = new Set(prev);
      if (next.has(userId)) {
        // すでに存在する場合は削除
        next.delete(userId);
      } else {
        // 存在しない場合は追加
        next.add(userId);
      }
      return next;
    });
  }, []);

  /** すべてのユーザー選択を切り替え */
  const toggleAllUsers = useCallback(() => {
    setSelectedUserIds((prev) => {
      if (prev.size === users.length) {
        // すべて選択済みの場合はクリア
        return new Set();
      } else {
        return new Set(users.map((user) => user.id));
      }
    });
  }, [users]);

  /** 選択したユーザーを一括削除 */
  const deleteSelectedUsers = useCallback(() => {
    selectedUserIds.forEach((id) => {
      deleteUser(id);
    });
    toast("選択したユーザーを削除しました");
    setSelectedUserIds(new Set());
  }, [selectedUserIds, deleteUser]);

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
