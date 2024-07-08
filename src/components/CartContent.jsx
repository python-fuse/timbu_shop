"use client";

import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./Cart";
import Link from "next/link";

const CartContent = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div className="left flex-1 space-y-4 ">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>
          No items in your cart. <br /> Add items from the{" "}
          <Link href="/" className="underline text-link">
            shop
          </Link>{" "}
          to see them here.
        </p>
      )}
    </div>
  );
};

export default CartContent;
