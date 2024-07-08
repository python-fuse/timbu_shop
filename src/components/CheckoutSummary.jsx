import React from "react";
import { FaPlus } from "react-icons/fa";
import CheckoutItem from "./CheckoutCard";
import Link from "next/link";

const CheckoutSummary = () => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <h3 className="text-center text-2xl font-bold">Order Summary</h3>
      <CheckoutItem
        item={{
          title: "Satin Sundress",
          price: "49.90",
          colors: ["#996515", "#F5B503"],
          imagePath: "yellow_dress.jpeg",
        }}
      />

      <hr />

      <div className="flex justify-between">
        <h3>Promo code</h3>
        <FaPlus />
      </div>
      <hr />

      <div className="grid grid-cols-2">
        <p>Subtotal</p>
        <p>$200.20</p>

        <p>Shipping</p>
        <p className="text-green-600">Free</p>

        <p>Estimated tax</p>
        <p className="text-green-600">$250.50</p>
      </div>

      <hr />

      <div className="grid grid-cols-2">
        <p className="text-[22px] font-bold">Total</p>
        <p className="text-[22px] font-bold">450.70</p>
      </div>

      <hr />

      <Link
        href="#"
        className="rounded-2xl text-center bg-link text-white p-4 hover:bg-[#401C0E] duration-300"
      >
        Place order
      </Link>

      <p className="text-sm text-center">
        By placing an order, you agree to Isabella's Shop's{" "}
        <span className="underline">Terms and Conditions</span> and{" "}
        <span className="underline">Privacy Policy</span>
      </p>
    </div>
  );
};

export default CheckoutSummary;
