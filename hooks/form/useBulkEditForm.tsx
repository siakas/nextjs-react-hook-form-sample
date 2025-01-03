import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";
import { bulkEditFormSchema, type BulkEditFormInput } from "@/types/schema";

export const useBulkEditForm = () => {
  const router = useRouter();
  const users = useUserStore((state) => state.users);
  const bulkUpdateUsers = useUserStore((state) => state.bulkUpdateUsers);

  const form = useForm<BulkEditFormInput>({
    resolver: zodResolver(bulkEditFormSchema),
    defaultValues: {
      users: users.map((user) => ({
        isActive: user.isActive,
        role: user.role,
      })),
    },
  });

  const onSubmit = (formData: BulkEditFormInput) => {
    bulkUpdateUsers(formData.users);
    toast("ステータスとアクセス権を一括更新しました");
    router.push("/");
  };

  return { form, onSubmit };
};
