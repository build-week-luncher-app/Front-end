import React, { Component } from 'react'
import axios from 'axios'
import NavMenu from '../NavMenu/NavMenu'

import { Button } from 'reactstrap'
import './DonorHomePage.css'

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
            <div className="donorhomepage">
                <NavMenu />
                <h1 className="school-heading">Schools In Need Of Donations</h1>
                <div className="school-list">
                        {this.state.schools.map(school => (
                        <SchoolList key={school.id} school={school} />
                        ))}           
                </div>
            </div>
        )
    }
}

function SchoolList({ school }) {
    const { schoolName, state, zip, fundsNeeded, contact } = school;
    return (
        <div className="card-contain">
            <div className="school-card"> 
                <h3>{schoolName}</h3>
                <hr />
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <p>Funds Needed: ${fundsNeeded}</p>
                <p>Email: {contact}</p>
                <Button>Donate Here</Button>
            </div>
        </div>
    )
}
