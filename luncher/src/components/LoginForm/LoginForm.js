import React from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import login from '../../actions/index'



class LoginForm extends React.Component {
  state = {
		credentials: {
			username: '',
			password: ''
		}
	}

	login = e => {
		e.preventDefault()
		this.props.login(this.state.credentials)
			.then((res) => {
				if (res) {
					this.props.history.push('/')
				}	
		}	)
	}

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value,
			}
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input type="text" name="username" placeholder="Email" value={this.state.credentials.username} onChange={this.handleChange}></input>
					<input type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange}></input>
					<button>Log in </button>
				</form>
			</div>
		)
	}
}

export default connect(null, { login })(LoginForm)