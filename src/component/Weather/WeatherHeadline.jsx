import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";
import CloudIcon from "../../../public/assets/cloud.svg";
import HazeIcon from "../../../public/assets/haze.svg";
import SnowIcon from "../../../public/assets/icons/snow.svg";
import SunnyIcon from "../../../public/assets/icons/sunny.svg";
import RainIcon from "../../../public/assets/rainy.svg";
import ThunderIcon from "../../../public/assets/thunder.svg";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const {climate}=weatherData
  function getWeatherIcon(climate) {
    switch (climate) {
        case "Rain":
            return RainIcon;
        case "Clouds":
            return CloudIcon;
        case "Clear":
            return SunnyIcon;
        case "Snow":
            return SnowIcon;
        case "Thunder":
            return ThunderIcon;
        case "Fog":
            return HazeIcon;
        case "Haze":
            return HazeIcon;
        case "Mist":
            return HazeIcon;

        default:
            return SunnyIcon;
    }
}


  
  return (
    <div>
    <div className="max-md:flex items-center justify-between md:-mt-10">
      <img src={getWeatherIcon(climate)} alt="climate" />
      <div className="max-md:flex items-center max-md:space-x-4">
        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
          {weatherData?.temperature}°
        </h1>
        <div className="flex items-center space-x-4 md:mb-4">
          <img src="./assets/pin.svg" />
          <h2 className="text-2xl lg:text-[50px]">{weatherData?.location}</h2>
        </div>
      </div>
    </div>

    <p className="text-sm lg:text-lg">
    {getFormattedDate(weatherData?.time, "time", false)} -{" "}
    {getFormattedDate(weatherData?.time, "date", false)}
</p>

  </div>
  )
}
