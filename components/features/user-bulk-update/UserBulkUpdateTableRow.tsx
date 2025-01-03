import { Controller, type Control } from "react-hook-form";
import { UserAvatar } from "@/components/common/UserAvatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import { useUserStore } from "@/stores/userStore";
import type { BulkUpdateFormInput } from "@/types/schema";
import { toRoleText } from "@/utils/toRoleText";

type Props = {
  index: number;
  control: Control<BulkUpdateFormInput>;
};

export const UserBulkUpdateTableRow = ({ index, control }: Props) => {
  const user = useUserStore((state) => state.users[index]);

  return (
    <TableRow>
      <TableCell>
        <UserAvatar src={user.profile?.avatarUrl} username={user.username} />
      </TableCell>
      <TableCell className="whitespace-nowrap">{user.username}</TableCell>
      <TableCell className="whitespace-nowrap">
        {user.profile?.fullName || "-"}
      </TableCell>
      <TableCell>
        <Controller
          name={`users.${index}.isActive`}
          control={control}
          render={({ field }) => (
            <Select
              value={field.value ? "active" : "inactive"}
              onValueChange={(value) => field.onChange(value === "active")}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">有効</SelectItem>
                <SelectItem value="inactive">無効</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </TableCell>
      <TableCell>
        <Controller
          name={`users.${index}.role`}
          control={control}
          render={({ field }) => (
            <Select
              value={field.value?.toString() ?? "null"}
              onValueChange={(value: string) => field.onChange(value)}
            >
              <SelectTrigger>
                <SelectValue>
                  {field.value ? toRoleText(field.value) : "未設定"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">{toRoleText("admin")}</SelectItem>
                <SelectItem value="user">{toRoleText("user")}</SelectItem>
                <SelectItem value="guest">{toRoleText("guest")}</SelectItem>
                {/* 未設定への変更はできない */}
                {/* <SelectItem value="null">{toRoleText(null)}</SelectItem> */}
              </SelectContent>
            </Select>
          )}
        />
      </TableCell>
    </TableRow>
  );
};
