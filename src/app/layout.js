import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "../components/layout/NavBar";
import FloatingCallButton from "../components/ui/FloatingCallButton";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "optional",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://lexvuip.com'),
  title: {
    default: 'Intellectual Property & Paralegal Solutions',
    template: '%s'
  },
  description: 'Expert IP Solutions, Patent Design, and Paralegal services for legal professionals. Specializing in utility and design patent drawings, eFiling, and trial preparation.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable}`} suppressHydrationWarning>
        <NavBar />
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}