import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { login } from '../../actions'
import NavMenu from '../NavMenu/NavMenu'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import SchoolHomePage from '../SchoolHomePage/SchoolHomePage'


class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			credentials: {
				username: '',
				password: ''
			}

		}
	}

	login = e => {
		e.preventDefault();
		this.props.login(this.state.credentials)
			.then(() => {
				this.props.history.push("/admin")
			})
			.catch((err) => {
				console.log(err)
			})
	  }

	handleChange = e => {
		e.preventDefault()
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
					{this.props.error && <p className="error">{this.props.error}</p>}
					<input type="text" name="username" placeholder="Username" value={this.state.credentials.username} onChange={this.handleChange} />
					<input type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange} />
						<button>Login</button>
				</form>
				<Link to="/register">Register Here</Link>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	error: state.error,
	loggingIn: state.loggingIn
})

const mapDispatchToProps = {
	login,
}

export default withRouter(
	connect(
		mapStateToProps, 
		mapDispatchToProps,
		)(Login)
)