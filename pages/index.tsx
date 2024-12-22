import { H1 } from "@/components/features/typography/H1";
import { UserRegistrationForm } from "@/components/features/user-registration/UserRegistrationForm";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <H1>ユーザー登録</H1>
      <UserRegistrationForm />
    </Layout>
  );
}
