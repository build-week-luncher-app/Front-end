import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addNewUser } from '../../actions'


class Register extends Component {
			state = {
				credentials: {
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					role: ''
				}
			}

		handleChange = e => {
			this.setState({ 
				credentials: {
					...this.state.credentials,
					[e.target.name]: e.target.value
				}
			})
		}

		registerUser = e => {
			e.preventDefault()
			this.props.addNewUser(this.state.credentials)
		}

		render() {
			return (
				<div>
					<form onSubmit={this.registerUser}>
						<input 
							type="text" 
							name="firstName"  
							placeholder="First name"
							value={this.state.credentials.firstName}
							onChange={this.handleChange}
						/>
						<input 
							type="text" 
							name="lastName"  
							placeholder="Last name"
							value={this.state.credentials.lastName}
							onChange={this.handleChange}
						/>
						<input 
							type="text" 
							name="email"  
							placeholder="Email"
							value={this.state.credentials.email}
							onChange={this.handleChange}
						/>
						<input 
							type="password" 
							name="password"  
							placeholder="Password"
							value={this.state.credentials.password}
							onChange={this.handleChange}
						/>
						<input 
							type="radio" 
							name="role"  
							value={this.state.credentials.role}
							onChange={this.handleChange}
						/>
						<label htmlFor="admin">Admin</label>
						<input
							type="radio"
							name="role"
							value={this.state.credentials.role}
							onChange={this.handleChange} 
						/>
						<label htmlFor="donor">Donor</label>
						<button type="submit">Register</button>
					</form>
				</div>
			)
		}	
}	

const mapStateToProps = state => {
  return {
    error: state.error,
    loggingIn: state.loggingIn,
    registerUser: state.registerUser
  }
}


export default connect(
    mapStateToProps,
    { addNewUser }
  )(Register);