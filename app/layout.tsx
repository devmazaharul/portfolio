import type { Metadata } from "next";
import {Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Toaster } from "@/components/ui/sonner";




const font1=Space_Grotesk({
  weight:"400",
  style:"normal",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Mazaharul | Full Stack Developer",
  description: "Portfolio website of Mazaharul - Full Stack Web Developer specializing in Next.js and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font1.className}>
      <body className="antialiased bg-white text-gray-900  ">
        <div className="grid md:grid-cols-4  p-4 gap-6">
          
          <div className="md:col-span-1  w-full h-full p-2">
          <Sidebar/>
          </div>

          <div className="md:col-span-3 mt-3 md:overflow-y-auto md:max-h-[170vh] scrollbar-hide">
  {children}
</div>

        </div>

        <Toaster position="bottom-right"/>
        
      </body>
    </html>
  );
}
