import React, { Component } from 'react'
import axios from 'axios'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'

import { Button } from 'reactstrap'
import './AddSchoolForm.css'

export default class AddSchoolForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: "",
            needAmount: "",
            schoolName: "",
        }
    }

    render() {
        return (
            <div>
            <NavMenu />
            <div className="add-school">
                <div className="school-form">
                    <form>
                        <input className="school-name" type="text" name="schoolName" value="" placeholder="School Name" required={true}></input>
                        <input className="amount-need" type="number" name="needAmount" value="" placeholder="School Need Amount" required={true}></input>
                        <input className="school-details" type="text" name="details" value="" placeholder="School Details" required={true}></input>
                        <Button className="asf-btn" type="submit">Save School</Button>
                        <Button className="asf-btn" href="/admin">Cancel</Button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}