"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {
  const [itemCount, setCount] = useState(1);
  return (
    <div className="flex space-x-4 lg:max-h-[200px]">
      <Image
        src={`/${item.imagePath}`}
        className="rounded-2xl"
        width={228}
        height={228}
      />

      <div className="flex flex-col justify-evenly">
        <h3 className="font-semibold text-3xl">{item.title}</h3>
        <p>
          Size: <strong>XXL</strong>
        </p>
        <p>
          Color: <strong>Yellow</strong>
        </p>
        <p>
          Price: <strong>{item.price}</strong>
        </p>
        <div className="flex justify-between">
          <Counter count={itemCount} setC={setCount} />
          <button>
            <FaTrash className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Counter = ({ count, setC }) => {
  return (
    <div className="flex text-white w-[100px] bg-primary rounded-lg p-2 items-center justify-evenly">
      <button onClick={() => (count > 2 ? setC(count - 1) : setC(1))}>
        <FaMinus />
      </button>
      <p>{count}</p>
      <button onClick={() => setC(count + 1)}>
        <FaPlus />
      </button>
    </div>
  );
};
export default CartItem;
