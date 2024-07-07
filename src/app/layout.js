import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/Cart";
import Nav from "../components/Nav";

const font = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Timbu Shop",
  description: "Shop as you like, We'll deliver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <CartProvider>
          <Nav />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
