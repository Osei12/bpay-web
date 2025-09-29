import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "BPay - #1 Financial App for International Students | SEVIS & Credit Building",
    template: "%s | BPay - Student Financial Solutions"
  },
  description: "Trusted by 50,000+ international students. Pay SEVIS fees instantly, build US credit score, get student loans, and manage finances seamlessly. Download BPay app now!",
  keywords: [
    "BPay", "student financial app", "international students", "SEVIS fee payment",
    "I-901 SEVIS", "student credit building", "US credit score", "student loan application",
    "mobile wallet students", "international student banking", "tuition payment",
    "F-1 visa students", "student finance management", "credit card for students",
    "student money transfer", "educational finance", "study abroad finances",
    "international student services", "secure student payments", "student financial aid"
  ],
  authors: [{ name: "BPay Team", url: "https://bpay.com" }],
  creator: "BPay Inc.",
  publisher: "BPay Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bpay.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BPay - #1 Financial App for International Students",
    description: "Join 50,000+ international students who trust BPay for SEVIS payments, credit building, and financial management. Download now!",
    url: 'https://bpay.com',
    siteName: 'BPay',
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BPay - Financial App for International Students',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPay - #1 Financial App for International Students",
    description: "Trusted by 50,000+ students. Pay SEVIS fees, build credit, get loans. Download BPay now!",
    site: '@BPayApp',
    creator: '@BPayApp',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#3B82F6',
    'color-scheme': 'light dark',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans min-h-screen`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
