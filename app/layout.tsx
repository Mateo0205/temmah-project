import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rtop from "@/components/Rtop";
import { AuthProvider } from "./context/AuthContest";
// import { i18n } from "next-i18next";
// import { IntlProvider } from "next-intl";
// import { useTranslation } from "next-i18next";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel web App for online reservation web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <AuthProvider>
        <body>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
          <Rtop />
        </body>
      </AuthProvider>
    </html>
  );
}
