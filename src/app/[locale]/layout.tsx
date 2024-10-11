import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "~/app/globals.scss";
import configThemeMantine from "../../configs/ThemeMantine";
import Navbar from "~/components/Navbar";
import ScrollToTop from "~/components/ScrollToTop";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-neutral-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider theme={configThemeMantine}>
            <Navbar />
            {children}
            <ScrollToTop />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
