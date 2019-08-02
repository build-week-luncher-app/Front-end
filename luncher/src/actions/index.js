import axios from 'axios'
import { axiosWithAuth } from '../components/axiosWithAuth/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const GET_ACCOUNT_START = 'GET_ACCOUNT_START'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'

export const ADD_NEW_USER = 'ADD_NEW_USER'


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.data);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export function getAccount() {
	return (dispatch) => { 
		dispatch({ type: GET_ACCOUNT_START })

		const headers = {
			Authorization: localStorage.getItem('token'),
		}

		axios.get('https://luncher-backend.herokuapp.com/api', { headers })
			.then((res) => {
				dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_ACCOUNT_FAILURE, payload: err.response.data })
			})
	}
}
