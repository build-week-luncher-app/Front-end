import {
    LOGIN_START,
    LOGIN_SUCCESS,
	LOGIN_FAILURE,
	GET_ACCOUNT_START,
	GET_ACCOUNT_SUCCESS,
	GET_ACCOUNT_FAILURE
  } from '../actions';
  
  const initialState = {
    error: null,
    loggingIn: false,
	schools: [],
	firstName: '',
	lastName: '',
	email: '',
	role: '',
	message: '',
	token: ''
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

			default:
				return state
		}
	}
	
	export default reducer