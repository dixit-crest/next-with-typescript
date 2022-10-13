import { LOCAL_STORAGE_USER } from "../../util"
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS
} from "./actionTypes"

// LOGIN

export const userLoginRequest = (payload, navigate) => {
    return {
        type: USER_LOGIN_REQUEST,
        payload: { payload, navigate }
    }
}

export const userLoginSuccess = (payload) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}

export const userLoginFailure = (payload) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload
    }
}

// USER

export const getUserRequest = (payload) => {
    return {
        type: GET_USER_REQUEST,
        payload
    }
}

export const getUserSuccess = (payload) => {
    return {
        type: GET_USER_SUCCESS,
        payload
    }
}

export const getUserFailure = (payload) => {
    return {
        type: GET_USER_FAILURE,
        payload
    }
}
/**
 * DSIPATCHING THIS IS NOT REQUIRED -
 * Clears the localstorage and replaces the url ti '/login'
 *
 */
export const userLogout = async () => {
    localStorage.removeItem(LOCAL_STORAGE_USER)

    return window.location.replace("/login")
}
