import { useRouter } from "next/router";
import { UserEditForm } from "@/components/features/form/UserEditForm";
import { PageTitle } from "@/components/features/typography/PageTitle";
import { Layout } from "@/components/layout/Layout";

export default function UserEditPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    return null;
  }

  return (
    <Layout>
      <PageTitle>ユーザー情報編集</PageTitle>
      <UserEditForm userId={id} />
    </Layout>
  );
}
