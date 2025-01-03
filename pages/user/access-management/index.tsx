import { UserBulkUpdateForm } from "@/components/features/form/UserBulkUpdateForm";
import { Layout } from "@/components/layout/Layout";

export default function UserRegistPage() {
  return (
    <Layout>
      {/* <PageTitle>アクセス権変更</PageTitle> */}
      <UserBulkUpdateForm />
    </Layout>
  );
}
