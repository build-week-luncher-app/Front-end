import React from 'react'

import { Button } from 'reactstrap'
import './Footer.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="footer-contain">
          <footer>
              <div className="footer-content">
                <a>
                    <Button>
                        Admin Login
                    </Button>
                </a>
                <p>&copy; 2019 LUNCHER</p>
              </div>
          </footer>
      </div>
    );
  }
}