import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex justify-between items-center border-b-link border-b-2 px-4">
      <Link href="/">
        <Image src={"/logo.png"} width={72} height={72} alt="Timbu Logo" />
      </Link>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg flex items-center space-x-2 bg-secondary p-2">
        <FaSearch />
        <input
          className="w-full border-none bg-transparent outline-none text-primary text-sm md:text-base lg:text-lg"
          type="text"
          placeholder="Search items..."
        />
      </div>

      <div className="space-x-4 hidden lg:flex">
        <Link href="#">
          <FaUser size={22} />
        </Link>

        <Link href="/cart">
          <FaShoppingCart size={22} />
        </Link>
      </div>

      <Link href="/cart" className="ml-3 lg:hidden">
        <FaShoppingCart size={22} />
      </Link>
    </div>
  );
};

export default Nav;
