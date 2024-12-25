import { useRouter } from "next/router";
import { UserStatisticsCard } from "@/components/features/user-statistics/UserStatisticsCard";
import { useUserStore } from "@/stores/userStore";

export const UserStatistics = () => {
  const router = useRouter();

  const users = useUserStore((state) => state.users);

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.isActive).length;
  const adminUsers = users.filter((user) => user.role === "admin").length;

  const handleFilterChange = (filter?: string) => {
    const query = filter ? `/?filter=${filter}` : "/";
    router.push(query);
  };

  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      <UserStatisticsCard
        label="総ユーザー数"
        userCount={totalUsers}
        onClick={() => handleFilterChange()}
      />
      <UserStatisticsCard
        label="アクティブユーザー"
        userCount={activeUsers}
        onClick={() => handleFilterChange("active")}
      />
      <UserStatisticsCard
        label="管理者"
        userCount={adminUsers}
        onClick={() => handleFilterChange("admin")}
      />
    </div>
  );
};
