import { HiOutlineSearch } from "react-icons/hi";

function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full bg-black/25 rounded-lg mr-3 overflow-hidden border-2 border-[#333333]  px-5 pr-8 flex items-center p-3 ">
      <HiOutlineSearch className="h-8 w-8 text-slate-200  animate-bounce" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="font-dancing-bold bg-black/0 px-3 py-1 text-lg ml-3 text-slate-300  lg:w-full focus:ring-none outline-none placeholder-slate-300"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
