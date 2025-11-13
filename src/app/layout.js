import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lexvuip",
  description: "We offer IP Solutions, Patent Design, and Paralegal services for individuals and businesses. Trusted experts in your region.",
  keywords: ["IP Solutions", "Patent Design", "Paralegal Services", "Legal Solutions", "Trusted Experts", "lexvuip", "Intellectual Property", "Patent", "Paralegal"],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
