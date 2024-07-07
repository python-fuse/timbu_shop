import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timbu Shop",
  description: "Shop as you like, We'll deliver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-10`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
