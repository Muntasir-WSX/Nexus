import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#F1F4F2] h-screen overflow-hidden`}>
        <div className="flex h-full min-w-0 overflow-hidden">
        

          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <main className="min-w-0 flex-1 overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}