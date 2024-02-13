import Header from "./component/Header/Header";
import WeatherBoard from "./component/Weather/WeatherBoard";
import { LocationContext } from "./context";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <>
      <WeatherProvider>
        <FavouriteProvider>
          <LocationContext>
            <div className="grid place-items-center h-screen mt-20">
              <Header />
              <main>
                <section>
                  <WeatherBoard />
                </section>
              </main>
            </div>
          </LocationContext>
        </FavouriteProvider>
      </WeatherProvider>
    </>
  );
}
