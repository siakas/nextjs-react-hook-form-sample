import { SettingsForm } from "@/components/features/settings/SettingsForm";
import { H1 } from "@/components/features/typography/H1";
import { Layout } from "@/components/layout/Layout";
import { Navigation } from "@/components/layout/Navigation";

export default function SettingsPage() {
  return (
    <Layout>
      <H1>設定</H1>
      <SettingsForm />
      <Navigation />
    </Layout>
  );
}
