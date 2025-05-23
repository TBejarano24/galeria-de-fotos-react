import { useState } from "react";

export default function SearchBar({ userInput }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchInput !== "" && userInput(searchInput);
  };

  return (
    <form
      className="flex w-full h-[70px] justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="border border-[#ccc] w-[30%] h-[40px] rounded-l-lg pl-2"
        type="text"
        // value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search..."
      />
      <img
        onClick={handleSubmit}
        className="bg-blue-900 p-3 rounded-r-lg"
        src="/galeria-de-fotos-react/search.svg"
        alt="search icon"
      />
    </form>
  );
}
