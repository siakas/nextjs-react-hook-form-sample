import { useRouter } from "next/router";
import { UserStatisticsCard } from "@/components/features/user-statistics/UserStatisticsCard";
import { useUserStore } from "@/stores/userStore";

export const UserStatistics = () => {
  const router = useRouter();

  const users = useUserStore((state) => state.users);

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.isActive).length;
  const adminUsers = users.filter((user) => user.role === "admin").length;

  const handleAllUsers = () => {
    router.push("/");
  };
  const handleFilterActiveUsers = () => {
    router.push("/?filter=active");
  };
  const handleFilterAdminUsers = () => {
    router.push("/?filter=admin");
  };

  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      <UserStatisticsCard
        label="総ユーザー数"
        userCount={totalUsers}
        onClick={handleAllUsers}
      />
      <UserStatisticsCard
        label="アクティブユーザー"
        userCount={activeUsers}
        onClick={handleFilterActiveUsers}
      />
      <UserStatisticsCard
        label="管理者"
        userCount={adminUsers}
        onClick={handleFilterAdminUsers}
      />
    </div>
  );
};
