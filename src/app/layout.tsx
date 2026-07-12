import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azzaro - Web Design Concept",
  description: "Minimalist hero section concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${dmSans.className} min-h-full flex flex-col bg-[#0e1520] text-white`}>
        {children}
      </body>
    </html>
  );
}
