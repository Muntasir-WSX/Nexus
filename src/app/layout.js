import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sharedComponents/navbar/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  sets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexus Dashboard",
  description: "Real Estate Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#F1F4F2] h-screen overflow-hidden flex flex-col`}>
        
        {/* Navbar upore thakbe full width niye */}
        <Navbar />

        {/* Niche baki children (Sidebar, Page content etc) horizontally thakbe */}
        <div className="flex flex-1 overflow-hidden">
          {children}
        </div>
        
      </body>
    </html>
  );
}