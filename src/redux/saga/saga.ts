import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_WEATHER,
  weatherSuccess,
  weatherLoading,
  weatherFail,
} from "../action/action";

const takeEveryUp: any = takeEvery;
export function* sagaWatcher() {
  yield takeEveryUp(REQUEST_WEATHER, sagaWorker);
}

function* sagaWorker({ city }: { city: any }) {
  try {
    yield put(weatherLoading());
    const payload = yield call(
      axios.get,
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12cb915946025ac4aef542b20c06822d&lang=ru`
    );

    yield put(weatherSuccess(payload.data));
  } catch (e) {
    yield put(weatherFail());
  }
}
