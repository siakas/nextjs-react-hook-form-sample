import { useRouter } from "next/router";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";
import type { BulkUpdateFormInput } from "@/types/schema";
import { bulkUpdateFormSchema } from "@/types/schema";

export const useBulkUpdateForm = () => {
  const router = useRouter();
  const users = useUserStore((state) => state.users);
  const bulkUpdateUsers = useUserStore((state) => state.bulkUpdateUsers);

  const form = useForm<BulkUpdateFormInput>({
    resolver: zodResolver(bulkUpdateFormSchema),
    defaultValues: {
      users: [], // 初期値は空配列とする
    },
  });

  // リロード時に users の値の取得が間に合わないことがあるため、
  // users の値が変更されたらフォームの値を更新する
  useEffect(() => {
    if (users.length > 0) {
      form.reset({
        users: users.map((user) => ({
          id: user.id,
          isActive: user.isActive,
          role: user.role,
        })),
      });
    }
  }, [users, form]);

  const onSubmit = (formData: BulkUpdateFormInput) => {
    bulkUpdateUsers(formData.users);
    toast("ステータスとアクセス権を一括更新しました");
    router.push("/");
  };

  return { form, onSubmit };
};
