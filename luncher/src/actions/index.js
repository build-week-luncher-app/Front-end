import axios from 'axios'
import axiosWithAuth  from '../components/axiosWithAuth/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const GET_ACCOUNT_START = 'GET_ACCOUNT_START'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'

export const REGISTER_DATA_START = 'REGISTER_DATA_START'
export const REGISTER_DATA_SUCCESS = 'REGISTER_DATA_SUCCESS'
export const REGISTER_DATA_FAILURE = 'REGISTER_DATA_FAILURE'

export const ADD_NEW_USER = 'ADD_NEW_USER'


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('https://luncher-backend.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    })
    .catch(err => 
      dispatch({ type: LOGIN_FAILURE, payload: err.response})
    )
}

export function getAccount() {
	return (dispatch) => { 
		dispatch({ type: GET_ACCOUNT_START })

		const headers = {
			Authorization: localStorage.getItem('token'),
		}

		axios.get('https://luncher-backend.herokuapp.com/api/admin/school', { headers })
			.then((res) => {
				dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_ACCOUNT_FAILURE, payload: err })
			})
	}
}

export const addNewUser = user => dispatch => {
  dispatch({type: REGISTER_DATA_START})
  axiosWithAuth().post('https://luncher-backend.herokuapp.com/api/register', user)
  .then(response =>
    dispatch({type: REGISTER_DATA_SUCCESS, payload: response.data})
    )
  .catch(error => 
    dispatch({type: REGISTER_DATA_FAILURE, payload: error}))
}