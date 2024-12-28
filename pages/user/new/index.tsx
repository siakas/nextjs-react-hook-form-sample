import { RegisterForm } from "@/components/features/form/RegisterForm";
import { PageTitle } from "@/components/features/typography/PageTitle";
import { Layout } from "@/components/layout/Layout";

export default function UserRegistPage() {
  return (
    <Layout>
      <PageTitle>新規ユーザー登録</PageTitle>
      <RegisterForm />
    </Layout>
  );
}
