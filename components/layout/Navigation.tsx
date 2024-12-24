import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <div className="mt-8 flex items-center justify-between">
      <Button asChild variant="secondary">
        <Link href="/">ユーザー登録</Link>
      </Button>
      <Button asChild variant="secondary">
        <Link href="/settings">設定画面</Link>
      </Button>
    </div>
  );
};
