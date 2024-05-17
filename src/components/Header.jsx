import Image from "next/image";
import React from "react";
import Button from "./Button";
import Search from "./Search";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex px-5 py-2 space-x-6 justify-between items-center">
      <Image src="/gamepad.png" alt="Gamepad" width={50} height={10} />
      <Search />
      <div className="hidden gap-2 md:flex lg:flex">
        <Button label="Sign Up" variant="btn-secondary" />
        <Button label="Sign In" variant="btn-primary" />
      </div>

      <div className="lg:hidden md:hidden">
        <FaBars size={30} />
      </div>
    </nav>
  );
};

export default Header;
