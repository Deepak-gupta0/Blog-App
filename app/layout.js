import {  Geist_Mono, Caveat, Nunito } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/Nav-wrapper";

const nunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "Created By Deepak Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} relative antialiased w-full`}
      > <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
