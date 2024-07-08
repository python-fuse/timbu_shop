import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="flex justify-center space-x-10">
      <Link
        href="#"
        className="text-link font-[400] text-lg hover:font-semibold"
      >
        New in
      </Link>
      <Link
        className="text-link font-[400] text-lg hover:font-semibold"
        href="#"
      >
        Dresses
      </Link>
      <Link
        className="text-link font-[400] text-lg hover:font-semibold"
        href="#"
      >
        Shoes
      </Link>
      <Link
        className="text-link font-[400] text-lg hover:font-semibold"
        href="#"
      >
        Accessories
      </Link>
    </div>
  );
};

export default Links;
