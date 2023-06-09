import "./globals.css";
import { Inter } from "next/font/google";
import { PageProvider } from "@/context/pageContext";
import { LangProvider } from "@/context/langContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lucas C. Pauli",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <PageProvider>
          <LangProvider>{children}</LangProvider>
        </PageProvider>
      </body>
    </html>
  );
}
