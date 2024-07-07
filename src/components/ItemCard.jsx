"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "./Cart";

const ItemCard = ({ item }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  return (
    <div className="flex flex-col w-full max-w-[300px] space-y-2 shadow-lg p-4 mt-2 rounded-[10px] border-2 border-[#DBDBDB] shadow-[#4F4F4F40]">
      <Image
        src={`/${item.imagePath}`}
        height={195}
        width={195}
        className="rounded-lg w-full h-[220px]"
      />

      <div className="flex justify-between">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>

      <p className="text-[18px] text-primary">S M L XL XXL</p>

      <div className="flex justify-between">
        <div className="flex space-x-2">
          {item.colors.map((color, idx) => {
            let style = { backgroundColor: color };
            return (
              <div
                key={idx}
                style={style}
                className={`w-[15px] h-[15px]`}
              ></div>
            );
          })}
        </div>

        <button
          className="appearance-none bg-link rounded p-2 shadow-lg shadow-[#4F4F4F40] grid place-content-center"
          onClick={() => {
            addToCart({ id: crypto.randomUUID(), ...item });
          }}
        >
          <FaCartPlus className="text-white" size={25} title="Add to cart" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
