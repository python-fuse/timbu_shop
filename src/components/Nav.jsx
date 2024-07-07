import Image from "next/image";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex justify-between ">
      <Image src={"/logo.png"} width={72} height={72} alt="Timbu Logo" />

      <div className="w-1/3 rounded-lg bg-secondary p-2">
        <FaSearch />
        <input
          className="w-full border-none bg-transparent"
          type="text"
          placeholder="Search items..."
        />
      </div>

      <div className="flex space-x-2">
        <FaUser />
        <FaShoppingBag />
      </div>
    </div>
  );
};

export default Nav;
