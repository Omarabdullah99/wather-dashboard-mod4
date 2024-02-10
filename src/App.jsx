import Header from "./component/Header/Header";
import WeatherBoard from "./component/Weather/WeatherBoard";

export default function App() {
  return (
    <div>
      <Header />
      <main className="my-[150px]">
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
