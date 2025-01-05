import { useRouter } from "next/router";
import { UserBulkUpdateTableHeader } from "@/components/features/user-bulk-update/UserBulkUpdateTableHeader";
import { UserBulkUpdateTableRow } from "@/components/features/user-bulk-update/UserBulkUpdateTableRow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Table, TableBody } from "@/components/ui/table";
import { useBulkUpdateForm } from "@/hooks/form/useBulkUpdateForm";
import { useUserStore } from "@/stores/userStore";

export const UserBulkUpdateForm = () => {
  const router = useRouter();
  const { form, onSubmit } = useBulkUpdateForm();

  // UI 表示切り替えのためのユーザー情報を取得
  const users = useUserStore((state) => state.users);

  return (
    <Card className="my-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>アクセス権一括変更</CardTitle>
            <div className="flex gap-2">
              <Button type="submit" disabled={!users.length}>
                変更
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/")}
                disabled={!users.length}
              >
                キャンセル
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {users.length ? (
              <Table>
                <UserBulkUpdateTableHeader />
                <TableBody>
                  {form.watch("users").map((user, index) => (
                    <FormField
                      key={user.id}
                      control={form.control}
                      name={`users.${index}`}
                      render={() => (
                        <UserBulkUpdateTableRow
                          index={index}
                          control={form.control}
                        />
                      )}
                    />
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center">ユーザーが登録されていません。</p>
            )}
          </CardContent>
        </form>
      </Form>
    </Card>
  );
};
