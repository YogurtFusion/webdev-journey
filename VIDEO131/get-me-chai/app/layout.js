import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get ME A chai- Fund your project's with chai",
  description: "This website is a crowd funding platfrom for creatros ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>

        <div className="min-h-screen" >
        {children}
        </div> 
        
        <Footer/>
        </body>
    </html>
  );
}
