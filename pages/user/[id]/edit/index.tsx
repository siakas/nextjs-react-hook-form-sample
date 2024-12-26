import { useRouter } from "next/router";
import { PageTitle } from "@/components/features/typography/PageTitle";
import { Layout } from "@/components/layout/Layout";

export default function SettingsPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    return null;
  }

  return (
    <Layout>
      <PageTitle>ユーザー情報編集</PageTitle>
      {/* <UserEditForm userId={id} /> */}
    </Layout>
  );
}
