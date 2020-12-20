import React from "react";
import { WeatherData } from "./../redux/types/types";

type WeatherBlock = {
  data: WeatherData | null;
};

const Weather: React.FC<WeatherBlock> = ({ data }) => {
  return (
    <>
      <div className="weather1">
        <div className=" center">
          <span className="weather__name">
            <h3>{data?.name}</h3>
            {data?.sys.country}
          </span>
        </div>

        <div className="display-flex">
          <div className="weather_content">
            <div>
              <h5>Темпаратура:{data?.main.temp}К</h5>
            </div>
            <div>
              <h5>Скорость ветра: {data?.wind.speed} m/s</h5>
            </div>
            <div>
              <h5>Погода: {data?.weather[0].description}</h5>
            </div>
            <div>
              <h5> Влажность воздуха: {data?.main.humidity}%</h5>
            </div>
            <div>
              <h5> Хмарность: {data?.clouds.all}%</h5>
            </div>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
              alt={data?.weather[0].description.toString()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
