import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import ThemeProvider from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reminder App",
  description: "Reminder App to trask all your tasks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(inter.className, "dark")}
        style={{ colorScheme: "dark" }}
      >
        <body>
          <ThemeProvider>
            <div className="flex min-h-screen w-full flex-col items-center dark:bg-black">
              <Navbar />
              <Separator />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
