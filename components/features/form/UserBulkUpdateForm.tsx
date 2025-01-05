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

  return (
    <Card className="my-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>アクセス権一括変更</CardTitle>
            <div className="flex gap-2">
              <Button type="submit">変更</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/")}
              >
                キャンセル
              </Button>
            </div>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </form>
      </Form>
    </Card>
  );
};
