import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const UserBulkUpdateTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-px">&nbsp;</TableHead>
        <TableHead className="w-56 whitespace-nowrap">表示名</TableHead>
        <TableHead className="w-72 whitespace-nowrap">名前</TableHead>
        <TableHead className="whitespace-nowrap">ステータス</TableHead>
        <TableHead className="whitespace-nowrap">アクセス権</TableHead>
      </TableRow>
    </TableHeader>
  );
};
