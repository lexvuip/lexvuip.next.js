import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

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
  title: "LexVu - Precision in Every Filing, Clarity in Every Design",
  description: "We offer IP Solutions, Patent Design, and Paralegal services for individuals and businesses. Trusted experts in your region.",
  keywords: ["IP Solutions", "Patent Design", "Paralegal Services", "Legal Solutions", "Trusted Experts", "lexvuip", "Intellectual Property", "Patent", "Paralegal"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${manrope.variable}`} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  );
}