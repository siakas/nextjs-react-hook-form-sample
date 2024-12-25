import { UserList } from "@/components/features/user-list/UserList";
import { UserStatistics } from "@/components/features/user-statistics/UserStatistics";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <UserStatistics />
      <UserList />
    </Layout>
  );
}
