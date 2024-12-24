import { UserRegistrationForm } from "@/components/features/form/UserRegistrationForm";
import { H1 } from "@/components/features/typography/H1";
import { Layout } from "@/components/layout/Layout";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <Layout>
      <H1>ユーザー登録</H1>
      <UserRegistrationForm />
      <Navigation />
    </Layout>
  );
}
