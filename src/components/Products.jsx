import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TopProducts from "./TopProducts";

const Products = () => {
  return (
    <div className="mt-2 px-8">
      <div className="flex justify-between">
        <h3 className="text-[25px] text-link">Top Products</h3>
        <div className="flex items-center space-x-2">
          <p className="text-link">View all</p>
          <FaArrowRight className="text-link" />
        </div>
      </div>

      <TopProducts />
    </div>
  );
};

export default Products;
