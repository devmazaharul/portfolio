import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

import { Toaster } from "sonner";
import MobileSidebarWrapper from "./components/MobileSidebarWrapper";

const font1 = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Mazaharul | Full Stack Developer",
  description:
    "Portfolio website of Mazaharul - Full Stack Web Developer specializing in Next.js, React, Node.js, and modern web technologies.",
  keywords: [
    "Mazaharul",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Mazaharul Islam" }],
  openGraph: {
    title: "Mazaharul | Full Stack Developer",
    description:
      "Portfolio website of Mazaharul - Full Stack Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font1.variable} ${font1.className}`} suppressHydrationWarning>
      <body className="antialiased bg-gray-50/50 text-gray-900 overflow-x-hidden">
        {/* ─── Background Effects (Subtle) ─── */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Soft gradient blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-100/10 rounded-full blur-[100px]" />
        </div>

        {/* ─── Main Layout ─── */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            
            {/* ═══ SIDEBAR ═══ */}
            {/* Desktop: Sticky sidebar */}
            <aside className="hidden lg:block w-[310px] xl:w-[330px] flex-shrink-0">
              <div className="sticky top-6 max-h-[calc(100vh-48px)] overflow-y-auto scrollbar-hide">
                <Sidebar />
              </div>
            </aside>

            {/* Mobile: Sidebar wrapper with toggle */}
            <MobileSidebarWrapper />

            {/* ═══ MAIN CONTENT ═══ */}
            <main className="flex-1 min-w-0 space-y-4 md:space-y-6">
              {children}
            </main>
          </div>
        </div>

        {/* ─── Toast Notifications ─── */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            },
          }}
          richColors
          closeButton
        />
      </body>
    </html>
  );
}