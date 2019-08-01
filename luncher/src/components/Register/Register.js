import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'

class Register extends Component {
    constructor() {
			super()
			this.state = {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				role: ''
			}
		}
		
		addUser = e => {
			e.preventDefault()
			const { firstName, lastName, email, password, role } = this.state
			const payload = { firstName, lastName, email, password, role }
			axios.post("https://luncher-backend.herokuapp.com/api/register", payload)
				.then((res) => {
					this.props.history.push('/')
				})
				.catch((err) => {
					console.log(err)
				})
			this.setState({
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				role: ''
			})
		}

		handleChange = e => {
			this.setState({ [e.target.value]: e.target.value})
		}

		render() {
			return (
				<div>
					<form onSubmit={this.addUser}>
						<input 
							type="text" 
							name="firstName"  
							placeholder="First name"
							value={this.props.firstName}
							onChange={this.handleChange}
						/>
						<input 
							type="text" 
							name="lastName"  
							placeholder="Last name"
							value={this.props.lastName}
							onChange={this.handleChange}
						/>
						<input 
							type="text" 
							name="email"  
							placeholder="Email"
							value={this.props.email}
							onChange={this.handleChange}
						/>
						<input 
							type="password" 
							name="password"  
							placeholder="Password"
							value={this.props.password}
							onChange={this.handleChange}
						/>
						<input 
							type="radio" 
							name="role"  
							value={this.state.role.admin}
							onChange={this.handleChange}
						/>
						<label for="admin">Admin</label>
						<input
							type="radio"
							name="role"
							value={this.state.role.donor}
							onChange={this.handleChange} 
						/>
						<label for="donor">Donor</label>
						<button type="submit">Register</button>
					</form>
				</div>
			)
		}
}


export default connect(null)(Register)