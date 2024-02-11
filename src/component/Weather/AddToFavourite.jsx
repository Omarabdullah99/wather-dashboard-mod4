import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";
import RedHeartIcon from "../../../public/assets/heart-red.svg";
import HeartIcon from "../../../public/assets/heart.svg";

export default function AddToFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
}, []);

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);
    console.log("found", found);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
