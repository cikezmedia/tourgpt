import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Tour GPT is an innovative travel planning tool powered by advanced AI technology",
  description:
    "Tour GPT goes beyond basic travel planning by leveraging natural language processing to understand your specific needs and preferences.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/icon.png" type="image/png" sizes="96x96" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="32x32"
        />
        <body className={inter.className}>
          <main className="flex flex-col items-center justify-between">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
