import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./redux/redux-store";
import "./App.scss";
import { REQUEST_WEATHER } from "./redux/action/action";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Weather from "./components/Weather";
import Loader from "./assist/Loader";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = React.useState<string>("Kyiv");
  const loading = useSelector((state: RootStore) => state.weather.loading);
  const error = useSelector((state: RootStore) => state.weather.faile);
  const weather = useSelector((state: RootStore) => state.weather.weatherData);

  React.useEffect(() => {
    dispatch({ type: REQUEST_WEATHER, city });
    setCity("");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);
  const handleClick = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch({ type: REQUEST_WEATHER, city });
    }
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {error && (
          <div className="alert alert-danger" role="alert">
            Введите правильно запрос!
          </div>
        )}
        <Input
          handleChange={handleChange}
          handleClick={handleClick}
          city={city}
        />
        {loading && <Loader />}
        <Weather data={weather} />
      </div>
    </div>
  );
};

export default App;
