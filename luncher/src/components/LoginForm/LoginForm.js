import React from 'react'
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom'

import { login } from '../../actions';
import NavMenu from '../NavMenu/NavMenu';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SchoolHomePage from '../SchoolHomePage/SchoolHomePage';


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
				this.props.history.push("/login")
			})
			.catch((err) => {
				console.log(err)
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
				<NavMenu />
				<form onSubmit={this.login}>
					<input type="text" name="username" placeholder="Name" value={this.state.credentials.username} onChange={this.handleChange} />
					<input type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange} />
					<Link to="/admin">
						<button>Login</button>
					</Link>
				</form>
				<PrivateRoute exact path="/admin" component={SchoolHomePage} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	error: state.error,
	loggingIn: state.loggingIn
})

export default connect(mapStateToProps, { login })(Login)