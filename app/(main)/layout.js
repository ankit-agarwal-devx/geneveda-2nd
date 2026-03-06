import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navigators from "../components/Header/Navigators/page";
import Footer from "../components/Footer/page";
import SocialSidebar from "../components/SocialSideBar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GeneVeda",
  description: "Revolutionizing healthcare through innovative, personalized wellness solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="z-[100] relative">
        <Navigators />
      </div>
        {children}
        <SocialSidebar />
      <Footer/>
      </body>
    </html>
  );
}
