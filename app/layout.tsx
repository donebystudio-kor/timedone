import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timedone.vercel.app"),
  title: "타임던 — 역사 속 시간의 틈새",
  description:
    "클레오파트라에게 피라미드는 이미 유물이었다. 역사적 사실을 비교하며 시간 감각이 뒤틀리는 경험을 해보세요.",
  openGraph: {
    title: "타임던 — 역사 속 시간의 틈새",
    description:
      "클레오파트라에게 피라미드는 이미 유물이었다. 역사적 사실을 비교하며 시간 감각이 뒤틀리는 경험을 해보세요.",
    type: "website",
    siteName: "타임던",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={notoSansKR.className}>
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
