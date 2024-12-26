import { useRouter } from "next/router";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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
import { useUserStore } from "@/stores/userStore";
import { userEditFormSchema, type UserEditFormInput } from "@/types/schema";

type Props = {
  userId: string;
};

export const UserEditForm = ({ userId }: Props) => {
  const router = useRouter();

  const users = useUserStore((state) => state.users);
  const updateUser = useUserStore((state) => state.updateUser);
  // console.log(users);

  // ユーザー情報を取得
  const user = users.find((user) => user.id === userId);

  // フォームの設定
  const form = useForm<UserEditFormInput>({
    resolver: zodResolver(userEditFormSchema),
    defaultValues: {
      email: "",
      profile: {
        fullName: "",
        avatarUrl: "",
        bio: "",
        location: "",
        website: "",
      },
      settings: {
        language: "",
        timezone: "",
      },
    },
  });

  /** フォーム送信処理 */
  const onSubmit = (formData: UserEditFormInput) => {
    updateUser(userId, formData);
    toast(`${user?.username}の情報を更新しました`);
    router.push("/");
  };

  //   // ユーザー情報を更新
  //   const onSubmit = (formData: UserEdit) => {
  //     updateUser(userId, formData);
  //     toast(`${formData.username}の情報を更新しました`);
  //     router.push("/");
  //   };

  // 取得したユーザーデータをフォームにセット
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto my-4 max-w-md space-y-4"
      >
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
            onClick={() => router.push("/")}
            className="min-w-24"
          >
            キャンセル
          </Button>
        </div>
      </form>
    </Form>
  );
};

// export const UserEditForm = ({ userId }: Props) => {
//   const router = useRouter();
//   const users = useUserStore((state) => state.users);
//   const updateUser = useUserStore((state) => state.updateUser);

//   // フォームを設定
//   const form = useForm<UserEdit>({
//     resolver: zodResolver(userEditSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//     },
//   });

//   // ユーザー情報を更新
//   const onSubmit = (formData: UserEdit) => {
//     updateUser(userId, formData);
//     toast(`${formData.username}の情報を更新しました`);
//     router.push("/");
//   };

//   // 取得したユーザーデータをフォームにセット
//   useEffect(() => {
//     if (user) {
//       form.reset({
//         username: user.username,
//         email: user.email,
//       });
//     }
//   }, [form, user]);

//   if (!user) {
//     return <div>ユーザーが見つかりません</div>;
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>ユーザー名</FormLabel>
//               <FormControl>
//                 <Input type="text" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>メールアドレス</FormLabel>
//               <FormControl>
//                 <Input type="email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="flex justify-center gap-4 pt-2">
//           <Button type="submit" className="min-w-24">
//             更新
//           </Button>
//           <Button
//             type="button"
//             variant="outline"
//             onClick={() => router.push("/")}
//             className="min-w-24"
//           >
//             キャンセル
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };
