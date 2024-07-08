"use client";
import CheckoutOptions from "@/components/CheckoutOptions";

const CheckoutPage = () => {
  return (
    <div className="p-2 flex flex-col min-h-screen">
      <h2 className="text-5xl">Checkout</h2>

      <div className="flex flex-col space-y-4 lg:flex-row">
        <CheckoutOptions />
        <div className="right lg:w-1/4 ">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
