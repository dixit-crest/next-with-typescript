import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import { LOCAL_STORAGE_USER as LOCAL_STORAGE_USER_KEY } from "../../util";
import { getUserApiCall, loginApiCall } from "./apiCalls";
import {
  getUserFailure,
  getUserSuccess,
  userLoginFailure,
  userLoginSuccess,
} from "./actions";
import { GET_USER_REQUEST, USER_LOGIN_REQUEST } from "./actionTypes";
import { toast } from "react-toastify";

function* userWorker({ payload }) {
  try {
    const response = yield call(loginApiCall, payload.payload);
    console.log({ response });
    if (!response.data) return null;
    // let userData = {
    //   ...response.data.data.user_data,
    //   token: response.data.data.token,
    // };
    // localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
    // yield put(userLoginSuccess(userData));
    yield put(userLoginSuccess(response.data.user));
    payload.navigate("/");
  } catch (error) {
    toast.error(error?.response?.data?.detail);
    yield put(userLoginFailure({ error }));
  }
}

function* getUserWorker({ payload }) {
  try {
    const response = yield call(getUserApiCall, payload);

    // keep the user token and other information and update the existing user with new data
    let userData = {
      ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)),
      ...response.data.data,
      permissions: response.data?.data?.permissions,
    };
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
    yield put(getUserSuccess(userData));
  } catch (error) {
    console.log(error.message);
    yield put(getUserFailure({ error }));
  }
}

export function* userWatcher() {
  yield takeLatest(USER_LOGIN_REQUEST, userWorker);
  yield takeLatest(GET_USER_REQUEST, getUserWorker);
}
