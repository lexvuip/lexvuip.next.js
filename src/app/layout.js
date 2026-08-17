import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "../components/layout/NavBar";
import FloatingCallButton from "../components/ui/FloatingCallButton";
import DisclaimerPopup from "../components/ui/DisclaimerPopup";
import ComingSoonPage from "../components/pages/ComingSoonPage";
import CustomCursor from "../components/ui/CustomCursor/CustomCursor";

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

const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
const baseUrl = region === 'IN' ? 'https://lexvuip.in' : 'https://lexvuip.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Intellectual Property & Paralegal Solutions',
    template: '%s'
  },
  description: 'Expert IP Solutions, Patent Design, and Paralegal services for legal professionals. Specializing in utility and design patent drawings, eFiling, and trial preparation.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://lexvuip.com',
      'en-IN': 'https://lexvuip.in',
      'x-default': 'https://lexvuip.com',
    },
  },
}

export default function RootLayout({ children }) {
  const isIndia = region === 'IN';

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="describedby" type="text/markdown" href="/llms.txt" />
      </head>
      <body className={`${playfair.variable} ${manrope.variable}`} suppressHydrationWarning>
        <CustomCursor />
        {isIndia ? (
          <ComingSoonPage />
        ) : (
          <>
            <DisclaimerPopup />
            <NavBar />
            {children}
            <FloatingCallButton />
          </>
        )}
      </body>
    </html>
  );
}