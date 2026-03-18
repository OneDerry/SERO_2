import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/website/footer";
import { Header } from "@/components/website/header";
import { CartProvider } from "@/hooks/use-cart";
import { SeroBot } from "@/shared/general/sero-bot/sero-bot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sero Soda | Zero Sugar. Full Flavour.",
  description:
    "Sero is a zero-sugar soda with bold flavour and no artificial sweeteners. Try Citrus Twist, Doctor Sero, Rocket Soda, Root Beer, and Grape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <SeroBot />
        </CartProvider>
      </body>
    </html>
    
  );
}
