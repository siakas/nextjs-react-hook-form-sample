import { useRouter } from "next/router";
import { UserEditForm } from "@/components/features/form/UserEditForm";
import { H1 } from "@/components/features/typography/H1";
import { Layout } from "@/components/layout/Layout";

export default function SettingsPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    return null;
  }

  return (
    <Layout>
      <H1>ユーザー編集</H1>
      <UserEditForm userId={id} />
    </Layout>
  );
}
