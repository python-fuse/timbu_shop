"use client";
import CheckoutOptions from "@/components/CheckoutOptions";
import CheckoutSummary from "@/components/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <div className="p-2 min-h-screen">
      <div className="flex flex-col space-y-4 lg:flex-row mt-4 lg:gap-x-10">
        <div className="flex flex-col w-2/4">
          <h2 className="text-5xl">Checkout</h2>
          <CheckoutOptions />
        </div>

        <div className="flex-1 ">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
