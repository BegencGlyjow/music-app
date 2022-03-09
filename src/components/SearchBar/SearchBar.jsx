function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full bg-black rounded-lg mr-3 overflow-hidden border-2 border-[#333333]  px-5 pr-8 flex items-center p-3 shadow-2xl shadow-lime-500/20">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-bounce" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-black px-3 text-md ml-3 text-slate-900 border-none lg:w-full focus:ring-0 outline-none placeholder-slate-400"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
