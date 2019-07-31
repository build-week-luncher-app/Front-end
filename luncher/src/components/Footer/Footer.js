import React from 'react'

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
              <a>
                  <button>
                      Admin Login
                  </button>
              </a>
              <p>&copy; 2019 WEBPT6 LUNCHER</p>
          </footer>
      </div>
    );
  }
}