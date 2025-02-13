import "@/styles/globals.css";
import { JetBrains_Mono as JetBrainMono } from "next/font/google";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";

const inter = JetBrainMono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Twitter Valentine",
  description: "Find your Twitter Valentine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans`}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
