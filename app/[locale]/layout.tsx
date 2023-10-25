import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import Providers from "../components/theme/providers";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      /> */}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}