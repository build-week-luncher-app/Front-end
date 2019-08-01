import React, { Component } from 'react'
import axios from 'axios'

export default class SchoolHomePage extends Component {
    constructor() {
        super()
        this.state = {
            schools: [],
            formDisplayed: false
        }
    }

    showForm = e => {
        e.preventDefault()
        this.setState({formDisplayed: !this.state.formDisplayed})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addSchool = e => {
        e.preventDefault()
        const { schoolName, state, zip, fundsNeeded } = this.state
        const payload = { schoolName, state, zip, fundsNeeded }
        axios
            .post('https://luncher-backend.herokuapp.com/api/admin/school', payload)
            .then(response => {
                this.props.history.push('/admin')
            })
            .catch((err) => {
                console.log(err)
            })
        this.setState({
            schoolName: '',
            state: '',
            zip: '',
            fundsNeeded: 0
        })
    }

    componentDidMount() {
        axios
            .get('https://luncher-backend.herokuapp.com/api/schools')
            .then(response => {
                this.setState(() => ({ schools: response.data }))
            })
            .catch(error => {
                console.error('Error', error)
            })
    }

    render() {
        return (
            <div>
                <h1>Schools In Need</h1>
                <button onClick={this.showForm}>Add a School Profile</button>
                {this.state.schools.map(school => (
                    <SchoolList key={school.id} school={school} />
                ))}
                <div>
                    <form onSubmit={this.addSchool}>
                        <input type="text" name="schoolName" placeholder="School Name" value={this.state.schoolName} onChange={this.handleChange} />
                        <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} />
                        <input type="text" name="zip" placeholder="Zip Code" value={this.state.zip} onChange={this.handleChange} />
                        <input type="number" size="6" name="fundsNeeded" placeholder="Funds Needed" value={this.state.fundsNeeded} onChange={this.handleChange} />
                    </form>
                </div>
            </div>
        )
    }
}

function SchoolList({ school }) {
    const { schoolName, state, zip, fundsNeeded, contact } = school;
    return (
        <div className="card-container">
            <div className="school-card">
                <h2>School: {schoolName}</h2>
                <h2>State: {state}</h2>
                <h2>Zip: {zip}</h2>
                <h2>Funds Needed: {fundsNeeded}</h2>
                <h2>Email: {contact}</h2>
            </div>
        </div>
    )
}

