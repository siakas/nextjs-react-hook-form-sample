import { UserList } from "@/components/features/user-list/UserList";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <UserList />
      {/* <H1>ユーザー登録</H1>
      <UserRegistrationForm />
      <UserList />
      <Navigation /> */}
    </Layout>
  );
}
