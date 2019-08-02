import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getAccount } from '../../actions'
import DonorHomePage from '../DonorHomePage/DonorHomePage';

class App extends Component {
    constructor() {
        super()
        this.state = {
            schools: [],
            formDisplayed: false
        }
    }

    componentDidMount() {
        this.props.getAccount()
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



    render() {
        return (
            <div>
                <DonorHomePage />
                <h1>Schools In Need</h1>
                <button onClick={this.showForm}>Add a School Profile</button>
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



const mapDispatchToProps = {
	getAccount,
}

export default withRouter(
    connect(
      null,
      mapDispatchToProps
    )(App)
  );
