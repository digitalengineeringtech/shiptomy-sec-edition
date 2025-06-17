import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import ChatWidget from "@/components/ChatWidget";
import { AIChatBot } from "@/components/chat/ai-chat-bot"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Myanmar Express Hub",
  description: "Your Shipping Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-container">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          <section className="min-h-screen w-full ">
            {children}
          </section>
          <Footer />
        </Providers>
        {/* <script defer src="https://static.getbutton.io/widget/bundle.js?id=yZQpO" ></script> */}
        {/* <ChatWidget /> */}
        <AIChatBot />
      </body>
    </html>
  );
}
