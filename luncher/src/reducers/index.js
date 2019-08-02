import {
    LOGIN_START,
    LOGIN_SUCCESS,
	LOGIN_FAILURE,
	GET_ACCOUNT_START,
	GET_ACCOUNT_SUCCESS,
	GET_ACCOUNT_FAILURE,
	REGISTER_DATA_START,
	REGISTER_DATA_SUCCESS,
	REGISTER_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    error: null,
	loggingIn: false,
	registerUser: false,
	data: [],
	firstName: '',
	lastName: '',
	email: '',
	role: '',
	message: '',
	token: localStorage.getItem('token')
  };

  const reducer = (state = initialState, action) => {
    switch(action.type) {
			case LOGIN_START: {
				return {
					...state,
					loggingIn: true
				}
			}

			case LOGIN_SUCCESS: {
				return {
					...state,
					loggingIn: false,
					error: null
				}
			}

			case LOGIN_FAILURE: {
				return {
					...state,
					loggingIn: false,
					error: action.data.message
				}
			}

			case GET_ACCOUNT_START: {
				return {
					...state,
					loggingIn: true
				}
			}

			case GET_ACCOUNT_SUCCESS: {
				const { firstName, lastName, email, role, message, token } = action.data
				return {
					...state,
					loggingIn: false,
					error: null,
					firstName,
					lastName,
					email,
					role,
					message,
					token
				}
			}

			case GET_ACCOUNT_FAILURE: {
				return {
					...state,
					loggingIn: false,
					error: action.data.message
				}
			}
			case REGISTER_DATA_START: {
				return {
					...state,
					registerUser: true
				}
			}
			case REGISTER_DATA_SUCCESS: {
				return {
					...state,
					data: [...action.payload],
					registerUser: false,
					error: null
				}
			}
			case REGISTER_DATA_FAILURE: {
				return {
					...state,
					registerUser: false,
					error: action.payload
				}
			}

			default:
				return state
		}
	}
	
	export default reducer