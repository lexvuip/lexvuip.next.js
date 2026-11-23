import { Playfair_Display, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "../components/layout/NavBar";
import FloatingCallButton from "../components/ui/FloatingCallButton";
import DisclaimerPopup from "../components/ui/DisclaimerPopup";
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

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="describedby" type="text/markdown" href="/llms.txt" />
      </head>
      <body className={`${playfair.variable} ${manrope.variable}`} suppressHydrationWarning>
        <CustomCursor />
        <DisclaimerPopup />
        <NavBar />
        {children}
        <FloatingCallButton />
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      {process.env.NEXT_PUBLIC_CLARITY_ID && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
          }}
        />
      )}
    </html>
  );
}