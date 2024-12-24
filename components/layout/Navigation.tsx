import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Navigation = () => {
  return (
    <>
      <Separator className="my-8" />
      <div className="flex items-center justify-between">
        <Button asChild variant="secondary">
          <Link href="/">ユーザー登録</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/settings">設定画面</Link>
        </Button>
      </div>
    </>
  );
};
