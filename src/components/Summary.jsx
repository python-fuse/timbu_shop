import React from "react";

const Summary = () => {
  return (
    <div className="p-4 bg-secondary space-y-8 rounded-2xl flex flex-col">
      <p className="text-center">Order Summary</p> <hr />
      <table>
        <tbody>
          <tr>
            <td>Sub total</td>
            <td>$450</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>$50.99</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td className="text-green-600">Free</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$2,220</td>
          </tr>
        </tbody>
      </table>
      <button className="rounded-2xl bg-link text-white p-4 hover:bg-[#401C0E] duration-300">
        Checkout
      </button>
      <hr />
      <p>
        Estimated delivery by <strong>27 May, 2026</strong>
      </p>
    </div>
  );
};

export default Summary;
