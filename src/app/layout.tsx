import { AppBar } from "@/components/surfaces/AppBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col items-center`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AppBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
