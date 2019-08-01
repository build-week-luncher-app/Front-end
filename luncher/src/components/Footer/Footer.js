import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import LoginForm from '../LoginForm/LoginForm'
import './Footer.css'


export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="footer-contain">
          <footer>
              <div className="footer-content">
                <Link to="/login">
                  <Button>
                    Admin Login
                  </Button>
                </Link>
                <p>&copy; 2019 LUNCHER</p>
              </div>
              <Route path="/login" component={LoginForm} />
          </footer>
      </div>
    );
  }
}