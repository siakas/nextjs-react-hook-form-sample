import { useRouter } from "next/router";
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
      users: users.map((user) => ({
        id: user.id,
        isActive: user.isActive,
        role: user.role,
      })),
    },
  });

  const onSubmit = (formData: BulkUpdateFormInput) => {
    bulkUpdateUsers(formData.users);
    toast("ステータスとアクセス権を一括更新しました");
    router.push("/");
  };

  return { form, onSubmit };
};
