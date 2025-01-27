import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Work Hive",
  description: "Track Your Team's Work Flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} dotted-bg`}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors={true}/>
            <Footer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
