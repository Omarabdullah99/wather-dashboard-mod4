import Header from "./component/Header/Header";
import WeatherBoard from "./component/Weather/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <>
      <WeatherProvider>
        <div className="grid place-items-center h-screen mt-20">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </WeatherProvider>
    </>
  );
}
