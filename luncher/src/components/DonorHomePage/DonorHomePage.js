import React, { Component } from 'react'
import axios from 'axios'
import NavMenu from '../NavMenu/NavMenu'
import { Card, CardBody, CardTitle, CardHeader, CardText, Button, Col, Row } from 'reactstrap'
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
                <div className="col-container">
                    <Row>
                        {this.state.schools.map(school => (
                        <SchoolList key={school.id} school={school} />
                        ))}           
                    </Row>
                </div>
            </div>
        )
    }
}

function SchoolList({ school }) {
    const { schoolName, state, zip, fundsNeeded, contact } = school;
    return (
        <Card body>
            <CardBody>
                <CardHeader>{schoolName}</CardHeader>
                <CardText>State: {state}</CardText>
                <CardText>Zip: {zip}</CardText>
                <CardText>Funds Needed: ${fundsNeeded}</CardText>
                <CardText>Email: {contact}</CardText>
                <Button>Donate Here</Button>
            </CardBody>
        </Card>
    )
}
