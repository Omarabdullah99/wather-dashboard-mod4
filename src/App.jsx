import Header from "./component/Header/Header";
import WeatherBoard from "./component/Weather/WeatherBoard";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen mt-20">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </>
  );
}
