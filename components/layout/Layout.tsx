import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NotoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${NotoSans.variable} font-sans text-base`}
    >
      <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <main className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow">
          {children}
        </main>
      </div>
      <Toaster className="font-sans text-base" />
    </div>
  );
};
