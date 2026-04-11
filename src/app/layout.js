import { Manrope } from "next/font/google";
import AppToaster from "@/components/sharedComponents/toast/AppToaster";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexus Dashboard",
  description: "Real Estate Management Dashboard",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${manrope.variable} bg-[#F1F4F2] h-screen overflow-hidden font-sans`}>
        {children}
        <AppToaster />
      </body>
    </html>
  );
}