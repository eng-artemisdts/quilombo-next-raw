import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Header from "../components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        <title>Associacao Quilombolas Vila Santa Efigenia</title>
        <meta
          name="description"
          content="Associacao Quilombolas Vila Santa Efigenia"
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
