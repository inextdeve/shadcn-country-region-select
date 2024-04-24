import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "../config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Country / Region Select",
  description: `A country / region select component implementation of Shadcn's select component`,
  keywords: [
    "shadcn",
    "country select",
    "region select",
    "country region select",
    "shadcn/ui",
    "shadcn country select",
    "country select component",
    "shadcn country select component",
    "select",
    "radix ui",
    "react country select",
  ],
  authors: [
    {
      name: "Yassine Farroud",
      url: "https://resume.inext.dev",
    },
  ],
  creator: "Yassine Farroud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@inext_devv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="smooth-scroll" lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
