import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "facebook: admin",
  description: " desc-admin:  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quibusdam veniam? Enim id sapiente ea reiciendis, saepe, repellat odio nostrum unde quidem iure possimus, perferendis omnis nihil. Officia corrupti, sed quae qui sit officiis. Quis quas perferendis illum at iste explicabo, incidunt libero sequi eos, dolorem ipsa earum quos molestias?",
};

export default function RootLayout({ children }) {
  return (
    <>
    <span className="text-lg" >Admin navbar</span>
    {children}
    </>
  );
}
