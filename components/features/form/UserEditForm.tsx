// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useUserStore } from "@/stores/userStore";

// /** ユーザー情報編集用スキーマ */
// const userEditSchema = z.object({
//   username: z
//     .string()
//     .min(3, "ユーザー名は3文字以上で入力してください")
//     .max(20, "ユーザー名は20文字以下で入力してください"),
//   email: z.string().email("有効なメールアドレスを入力してください"),
// });

// type UserEdit = z.infer<typeof userEditSchema>;

// type Props = {
//   userId: string;
// };

// export const UserEditForm = ({ userId }: Props) => {
//   const router = useRouter();
//   const users = useUserStore((state) => state.users);
//   const updateUser = useUserStore((state) => state.updateUser);

//   // ユーザー情報を取得
//   const user = users.find((user) => user.id === userId);

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
