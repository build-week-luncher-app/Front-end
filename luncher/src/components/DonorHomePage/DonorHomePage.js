import React, { Component } from 'react'
import axios from 'axios'
import './DonorHomePage.css'

import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

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
                <h1>Schools In Need</h1>
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
        <Card className="card">
            <CardBody>
                <CardTitle>School: {schoolName}</CardTitle>
                <CardText>State: {state}</CardText>
                <CardText>Zip: {zip}</CardText>
                <CardText>Funds Needed: {fundsNeeded}</CardText>
                <CardText>Email: {contact}</CardText>
                <Button>Donate Here</Button>
            </CardBody>
        </Card>
    )
}
