import Navbar from "@/components/navbar";
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
      <body className={inter.className}>
        <PageProvider>
          <LangProvider>
            <Navbar />
            {children}
          </LangProvider>
        </PageProvider>
      </body>
    </html>
  );
}
