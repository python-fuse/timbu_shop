import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex w-1/2 gap-2">
      <input
        type="text"
        placeholder="Search"
        className="relative w-20 text-green-400 outline-none focus:border-white duration-300 hover:w-full focus:w-full bg-transparent border-[3px] p-2 rounded-full border-green-400"
      />
      <button className="rounded-full hover:bg-green-600 px-3 duration-300 p-2 bg-green-400">
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
