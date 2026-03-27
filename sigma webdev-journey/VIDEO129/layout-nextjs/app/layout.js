import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "facebook",
  description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quibusdam veniam? Enim id sapiente ea reiciendis, saepe, repellat odio nostrum unde quidem iure possimus, perferendis omnis nihil. Officia corrupti, sed quae qui sit officiis. Quis quas perferendis illum at iste explicabo, incidunt libero sequi eos, dolorem ipsa earum quos molestias?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
