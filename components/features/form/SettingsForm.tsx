// import { useEffect } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";
// import { useSettingStore } from "@/stores/settingStore";
// import { appSettingsSchema, type AppSettings } from "@/types/schema";

// export const SettingsForm = () => {
//   const settings = useSettingStore((state) => state.settings);
//   const updateSettings = useSettingStore((state) => state.updateSettings);

//   const form = useForm<AppSettings>({
//     resolver: zodResolver(appSettingsSchema),
//     defaultValues: settings,
//   });

//   // ストアから設定を取得してフォームにセット
//   useEffect(() => {
//     form.reset(settings);
//   }, [form, settings]);

//   const onSubmit = (data: AppSettings) => {
//     updateSettings(data);
//     toast("設定を保存しました：", {
//       description: (
//         <pre className="mt-2 block w-full rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="minPasswordLength"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>最小パスワード長</FormLabel>
//               <FormControl>
//                 <Input
//                   type="text"
//                   {...field}
//                   {...form.register("minPasswordLength", {
//                     valueAsNumber: true,
//                   })}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="requireSpecialChar"
//           render={({ field }) => (
//             <FormItem>
//               <div className="text-sm font-medium leading-none">
//                 パスワードの文字列
//               </div>
//               <div className="flex items-center justify-between">
//                 <FormLabel className="cursor-pointer text-base font-normal">
//                   特殊文字を必須にする
//                 </FormLabel>
//                 <FormControl>
//                   <Switch
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                   />
//                 </FormControl>
//               </div>
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="theme"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>テーマ</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="テーマを選択してください" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="light">Light</SelectItem>
//                   <SelectItem value="dark">Dark</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="flex justify-center pt-2">
//           <Button type="submit" className="min-w-24">
//             設定を保存
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };
