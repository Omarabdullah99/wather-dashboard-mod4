import { useContext } from "react";
import { useState } from "react";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/locationData";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  const [searchTerm, setSearchTerm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const fetchedLocation = getLocationByName(searchTerm);
    setSelectedLocation(fetchedLocation);
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">
          <img src="./assets/search.svg" />
        </button>
      </div>
    </form>
  );
}
