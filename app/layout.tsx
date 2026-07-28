import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";


import "./globals.css";
import Header from "./Components/Layout/Header";
import Rugs_Banner from "./(website)/custome_rugs/Components/Rugs_Banner";
import { Provider } from "react-redux";
import ReduxProvider from "./Redux_Toolkit/ReduxProvider";
import Footer from "./Components/Layout/Footer";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
  variable: "--font-heading",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "North Expression",
  description: "Carpets Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="antialiased">

        <ReduxProvider>

          {/* Header */}
          <div className="special_header z-[100] w-screen flex items-center justify-center fixed top-4">
            <Header />
          </div>

          {/* Page Content */}
          {children}

          {/* <Rugs_Banner /> */}
          <Footer/>

        </ReduxProvider>

      </body>
    </html>
  );
}