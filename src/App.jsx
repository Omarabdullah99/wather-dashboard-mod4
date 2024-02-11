import Header from "./component/Header/Header";
import WeatherBoard from "./component/Weather/WeatherBoard";

export default function App() {
  return (
    <div className="grid place-items-center h-screen mt-20">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
