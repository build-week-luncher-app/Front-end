import React, { Component } from 'react'
import axios from 'axios'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'

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
                <Footer />
            </div>
        )
    }
}

function SchoolList({ school }) {
    const { schoolName, state, zip, fundsNeeded, contact } = school;
    return (
        <div>
            <div className="card-contain">
                <div className="school-card"> 
                    <h3><strong>{schoolName}</strong></h3>
                    <hr />
                    <p><strong>State: </strong>{state}</p>
                    <p><strong>Zip: </strong>{zip}</p>
                    <p><strong>Funds Needed: </strong>${fundsNeeded}</p>
                    <p><strong>Email: </strong>{contact}</p>
                    <Button>Donate</Button>
                </div>
            </div>
        </div>
    )
}
