import React, { Component } from 'react'
import axios from 'axios'

export default class DonorHomePage extends Component {
    constructor() {
        super()
        this.state = {
            schools: [],
        }
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
                <h1>Schools</h1>
                {this.state.schools.map(school => (
                    <SchoolList key={school.id} school={school} />
                ))}
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
