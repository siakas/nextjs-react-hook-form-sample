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
      <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <main className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
          {children}
        </main>
      </div>
    </div>
  );
};
