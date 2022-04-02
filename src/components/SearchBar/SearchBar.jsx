import { HiOutlineSearch } from "react-icons/hi";

function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full bg-black/25 rounded-lg mr-3 border border-slate-500  px-1  flex items-center p-3 ">
      <HiOutlineSearch className="md:h-8 md:w-8 h-4 w-4 text-slate-200  animate-bounce" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="font-dancing-bold bg-black/0 px-3 py-1 md:text-lg text-xs ml-3 text-slate-300  lg:w-full focus:ring-none outline-none placeholder-slate-300"
        placeholder="Search..."
      />

    </div>
  );
}

export default SearchBar;
