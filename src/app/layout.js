import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "../components/layout/NavBar";
import FloatingCallButton from "../components/ui/FloatingCallButton";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL('https://lexvuip.github.io'),
  title: {
    default: 'LexVuIP | Intellectual Property & Paralegal Solutions',
    template: '%s | LexVuIP'
  },
  description: 'Expert IP Solutions, Patent Design, and Paralegal services for legal professionals. Specializing in utility and design patent drawings, eFiling, and trial preparation.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lexvuip.github.io/',
    siteName: 'LexVuIP',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'LexVuIP Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LexVuIP | Intellectual Property & Paralegal Solutions',
    description: 'Expert IP Solutions, Patent Design, and Paralegal services for legal professionals.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable}`}>
        <NavBar />
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}