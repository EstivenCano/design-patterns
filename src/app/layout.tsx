import { AppBar } from "@/components/surfaces/AppBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Patterns on Frontend",
  description:
    "This project demonstrate how to apply different desing patterns on the frontend side",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col items-center`}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
