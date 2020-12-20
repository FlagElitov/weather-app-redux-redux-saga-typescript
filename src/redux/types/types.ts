import {
  WEATHER_FAIL,
  WEATHER_LOADING,
  WEATHER_SUCCESS,
} from "../action/action";

export interface Weather {
  description: string;
  icon: string;
}

export interface WeatherData {
  clouds: {
    all: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };

  weather: Weather[];
  wind: {
    speed: number;
  };
}

export type WeatherTypes = {
  main: {
    temp: number;
    humidity: number;
  };
  weather: weatherrTypes[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    country: string;
  };
  name: string;
};

export interface weatherrTypes {
  description: string;
  icon: string;
}

export interface initialStateT {
  loading: boolean;
  faile: boolean;
  weatherData: WeatherData | null;
}

export interface WeatherLoading {
  type: typeof WEATHER_LOADING;
}
export interface WeatherFail {
  type: typeof WEATHER_FAIL;
}
export interface WeatherSuccess {
  type: typeof WEATHER_SUCCESS;
  payload: WeatherData;
}
export type WeatherDispatchTypes =
  | WeatherLoading
  | WeatherFail
  | WeatherSuccess;
