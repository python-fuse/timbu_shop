"use client";

import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./Cart";

const CartContent = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div className="left flex-1 space-y-4 ">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem item={item} />)
      ) : (
        <p>
          No items in your cart. <br /> Shop to see your items here
        </p>
      )}
    </div>
  );
};

export default CartContent;
