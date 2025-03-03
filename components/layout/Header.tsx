import Link from "next/link";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">
        <Link href="/">ユーザー管理ダッシュボード</Link>
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-1 size-4" />
            設定
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/user/new">新規ユーザー登録</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/user/access-management">アクセス権管理</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
