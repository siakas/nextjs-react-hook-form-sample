import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { InputErrorMessage } from "@/components/features/user-registration/InputErrorMessage";
import { Label } from "@/components/features/user-registration/Label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { appSettingsSchema, type AppSettings } from "@/types/schema";
import { getSettings } from "@/utils/storage";

export const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppSettings>({
    resolver: zodResolver(appSettingsSchema),
    defaultValues: getSettings(),
  });

  const onSubmit = (data: AppSettings) => {
    toast("設定を保存しました：", {
      description: (
        <pre className="mt-2 block w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="minPasswordLength">最小パスワード長</Label>
        <Input
          type="text"
          id="minPasswordLength"
          {...register("minPasswordLength", { valueAsNumber: true })}
        />
        {errors.minPasswordLength && (
          <InputErrorMessage>
            {errors.minPasswordLength.message}
          </InputErrorMessage>
        )}
      </div>

      <div>
        <div className="mb-1 block text-sm font-bold">パスワードの文字列</div>
        <div className="flex items-center justify-between">
          <label htmlFor="requireSpecialChar" className="cursor-pointer">
            特殊文字を必須にする
          </label>
          <Switch id="requireSpecialChar" {...register("requireSpecialChar")} />
        </div>
      </div>

      <div>
        <Label htmlFor="theme">テーマ</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="テーマを選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-center pt-8">
        <Button type="submit">設定を保存</Button>
        {/* <Button
          type="button"
          variant="outline"
          onClick={() => toast("こんにちは")}
        >
          トースト起動
        </Button> */}
      </div>
    </form>
  );
};
