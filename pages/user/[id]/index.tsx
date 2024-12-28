import Link from "next/link";
import { useRouter } from "next/router";
import { Pencil } from "lucide-react";
import { UserProfile } from "@/components/features/user-profile/UserProfile";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    return null;
  }

  return (
    <Layout>
      <UserProfile userId={id} />
      <div className="mt-6">
        <Button asChild>
          <Link href={`/user/${id}/edit`}>
            <Pencil />
            プロフィールを編集
          </Link>
        </Button>
      </div>
    </Layout>
  );
}
