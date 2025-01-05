import { Checkbox } from "@/components/ui/checkbox";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUserSelection } from "@/hooks/user-list/useUserSelection";

export const UserTableHeader = () => {
  const { isAllSelected, toggleAllUsers } = useUserSelection();

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-px">
          <Checkbox checked={isAllSelected} onCheckedChange={toggleAllUsers} />
        </TableHead>
        <TableHead className="w-px">&nbsp;</TableHead>
        <TableHead className="w-56 whitespace-nowrap">表示名</TableHead>
        <TableHead className="w-72 whitespace-nowrap">名前</TableHead>
        <TableHead className="whitespace-nowrap">メールアドレス</TableHead>
        <TableHead className="w-40 whitespace-nowrap">ステータス</TableHead>
        <TableHead className="w-40 whitespace-nowrap">アクセス権</TableHead>
        <TableHead className="whitespace-nowrap">&nbsp;</TableHead>
      </TableRow>
    </TableHeader>
  );
};
