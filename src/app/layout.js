import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sharedComponents/navbar/navbar";
import dashboardData from "@/data/dasboardData.json";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexus Dashboard",
  description: "Real Estate Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${manrope.variable} bg-[#F1F4F2] h-screen overflow-hidden flex flex-col font-sans`}>
        
        {/* Navbar upore thakbe full width niye */}
        <Navbar activeUser={dashboardData.activeUser} />

        {/* Niche baki children (Sidebar, Page content etc) horizontally thakbe */}
        <div className="flex flex-1 overflow-hidden">
          {children}
        </div>
        
      </body>
    </html>
  );
}