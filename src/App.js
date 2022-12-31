import WeatherSearch from "./WeatherSearch";
import "./App.css";
import "./index.css";
import GitHubLink from "./GitHubLink";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <GitHubLink />
    </div>
  );
}
