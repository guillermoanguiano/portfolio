import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Socials from "@/components/Socials";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Guillermo - Frontend Developer",
  description: "Guillermo Frontend Dev",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Socials />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
