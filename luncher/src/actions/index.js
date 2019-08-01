import axios from 'axios'

import { axiosWithAuth } from '../components/axiosWithAuth/axiosWithAuth'





export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const ADD_NEW_USER = 'ADD_NEW_USER'


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth
      .post('/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.message })
      })
  }
