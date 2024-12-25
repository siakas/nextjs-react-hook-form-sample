import { UserList } from "@/components/features/user-list/UserList";
import { UserStatus } from "@/components/features/user-status/UserStatus";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <UserStatus />
      <UserList />
    </Layout>
  );
}
