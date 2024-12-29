import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUserEditForm } from "@/hooks/form/useUserEditForm";

type Props = {
  userId: string;
};

export const UserEditForm = ({ userId }: Props) => {
  const router = useRouter();
  const { form, user, onSubmit } = useUserEditForm(userId);

  // 初期表示としてユーザー情報をフォームにセット
  useEffect(() => {
    if (user) {
      form.reset({
        email: user.email,
        profile: {
          fullName: user.profile?.fullName ?? "",
          avatarUrl: user.profile?.avatarUrl ?? "",
          bio: user.profile?.bio ?? "",
          location: user.profile?.location ?? "",
          website: user.profile?.website ?? "",
        },
        settings: {
          language: user.settings?.language ?? "",
          timezone: user.settings?.timezone ?? "",
        },
      });
    }
  }, [form, user]);

  if (!user) {
    return null;
  }

  return (
    <Card className="mx-auto my-4 max-w-xl">
      <CardContent className="p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* ユーザー名は変更不可 */}
            <div className="space-y-1">
              <FormLabel>ユーザー名（変更できません）</FormLabel>
              <Input value={user.username} readOnly className="bg-accent" />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名前</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* TODO: アバター画像のアップロードはファイルタイプにする必要がある */}
            <FormField
              control={form.control}
              name="profile.avatarUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>アバター</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>自己紹介</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-24" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>場所</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* TODO: 言語はセレクトボックスに変更する */}
            <FormField
              control={form.control}
              name="settings.language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>言語</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* TODO: タイムゾーンはセレクトボックスに変更する */}
            <FormField
              control={form.control}
              name="settings.timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>タイムゾーン</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center gap-4 pt-2">
              <Button type="submit" className="min-w-24">
                更新
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(`/user/${userId}`)}
                className="min-w-24"
              >
                キャンセル
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
