import CartContent from "@/components/CartContent";
import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import React from "react";

const page = () => {
  return (
    <div className="p-2 flex flex-col min-h-screen">
      <h2 className="text-5xl">Cart</h2>

      <div className="flex flex-col lg:flex-row">
        <CartContent />
        <div className="right lg:w-1/4 fixed right-3 bottom-3">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default page;
