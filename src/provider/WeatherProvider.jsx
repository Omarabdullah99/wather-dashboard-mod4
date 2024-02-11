
import { WeatherContext } from "../context"
import useWeatherHook from "../hooks/useWeatherHook"
// eslint-disable-next-line react/prop-types
export default function WeatherProvider({children}) {
    const {weatherData,error, loading}=useWeatherHook()
  return (
    <WeatherContext.Provider value={{weatherData,error,loading}}>
    {children}
    </WeatherContext.Provider>
  )
}

