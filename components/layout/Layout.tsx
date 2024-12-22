import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] text-base`}
    >
      <main className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="min-h-screen w-full max-w-5xl rounded-lg bg-card px-32 py-16 shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
};
