import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./Providers";

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
          <Providers>
            <main className="flex flex-col items-center">
              <Navbar />
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
