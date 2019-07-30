import React from 'react'
import { connect } from 'react-redux';

import { login } from '../../actions';


class Login extends React.Component {
  state = {
		credentials: {
			username: '',
			password: ''
		}
	}

	login = e => {
		e.preventDefault()
		this.props.login(this.state.credentials)
			.then(() => {
				this.props.history.push('/')
			})
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
					<input type="text" name="username" placeholder="Name" value={this.state.credentials.username} onChange={this.handleChange} />
					<input type="text" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange} />
					<button>Login</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	error: state.error,
	loggingIn: state.loggingIn
})

export default connect(null, { login })(Login)