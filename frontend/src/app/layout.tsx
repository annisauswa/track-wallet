import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from './SessionProvider';
import { GlobalContextProvider } from '../../context/IncomeContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Track Wallet",
  description: "Web app to help students, Gen Z, and millennials in managing their expenses",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <GlobalContextProvider>
            {children}
          </GlobalContextProvider>
        </SessionProvider>
        </body>
    </html>
  );
}
