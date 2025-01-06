import { useRouter } from "next/router";
import { UserBulkUpdateTableHeader } from "@/components/features/user-bulk-update/UserBulkUpdateTableHeader";
import { UserBulkUpdateTableRow } from "@/components/features/user-bulk-update/UserBulkUpdateTableRow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Table, TableBody } from "@/components/ui/table";
import { useBulkUpdateForm } from "@/hooks/form/useBulkUpdateForm";

export const UserBulkUpdateForm = () => {
  const router = useRouter();
  const { form, onSubmit } = useBulkUpdateForm();

  // ユーザー配列の値を監視（watch）し、変更があるたびに再取得する
  const users = form.watch("users");

  // console.log("users:", users);
  // console.log("users.length:", users.length);

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
