import { Manrope } from "next/font/google";
import "./globals.css";

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
      <body className={`${manrope.variable} bg-[#F1F4F2] h-screen overflow-hidden font-sans`}>
        {children}
      </body>
    </html>
  );
}