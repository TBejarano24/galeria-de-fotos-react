import Button from "./components/Button";
import CategoryTitle from "./components/CategoryTitle";
import PhotoContainer from "./components/PhotoContainer";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("mountain");

  return (
    <>
      <div className="flex justify-center my-5">
        <h1 className="text-4xl font-bold">PHOTO SEARCH</h1>
      </div>
      <SearchBar userInput={setSearchInput} />
      <Button buttonQuery={setSearchInput} />
      <CategoryTitle searchTerm={searchInput} />
      <PhotoContainer photoQuery={searchInput} />
    </>
  );
}

export default App;
