import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from '../actions';
  
  const initialState = {
    error: '',
    loggingIn: false,
    schools: []
  };

  const reducer = (state = initialState, action) => {
    switch(action.type) {
			case LOGIN_START:
				return {
					...state,
					error: '',
					loggingIn: true
				}
			case LOGIN_SUCCESS:
				return {
					...state,
					loggingIn: false,
					error: ''
				}
			default:
				return state
		}
	}
	
	export default reducer