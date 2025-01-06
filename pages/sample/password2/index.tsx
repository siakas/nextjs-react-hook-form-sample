import { useForm, useWatch } from "react-hook-form";
import { PageTitle } from "@/components/features/typography/PageTitle";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SamplePasswordPage() {
  const { control, register } = useForm();

  // useWatch でパスワードの値を監視
  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  // パスワードの強度を判定する関数
  const getPasswordStrength = (password: string) => {
    if (!password) return "";
    if (password.length > 8) return "強いパスワードです";
    return "弱いパスワードです";
  };

  return (
    <Layout>
      <PageTitle>パスワードフォームサンプル②</PageTitle>

      <Card className="mx-auto my-4 max-w-xl">
        <CardContent className="p-10">
          <Input
            type="password"
            {...register("password")}
            placeholder="パスワードを入力"
          />
          <p className="my-2">{getPasswordStrength(password)}</p>
        </CardContent>
      </Card>
    </Layout>
  );
}
