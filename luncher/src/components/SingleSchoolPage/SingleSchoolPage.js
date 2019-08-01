import React, { Component } from 'react'
import axios from 'axios'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'

import './SingleSchoolPage.css'
import {
    Button,
} from 'reactstrap'

export default class SingleSchoolPage extends Component {
    constructor(props) {
        super(props)
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
            <div className="App">
                <NavMenu />
                <div className="admin-nav">
                    <Button>Add School</Button>
                    <h1>School Administration</h1>
                    <Button>Logout</Button>
                </div>
                <div className="admin-school-list">
                    {this.state.schools.map(school => (
                        <AdminSchoolList key={school.id} school={school} />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

function AdminSchoolList({ school }) {
    const { schoolName, state, zip, fundsNeeded, contact } = school;
    return (
        <div>
            <div className="admin-card-contain">
                <div className="admin-school-card">
                    <h4><strong>{schoolName}</strong></h4>
                    <p>${fundsNeeded}</p>
                    <p>{contact}</p>
                </div>
            </div>
        </div>
    )
}