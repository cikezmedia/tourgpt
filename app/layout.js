import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Tour GPT is an innovative travel planning tool powered by advanced AI technology",
  description:
    "Tour GPT goes beyond basic travel planning by leveraging natural language processing to understand your specific needs and preferences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
