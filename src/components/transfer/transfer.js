import React, { Component } from 'react';
import './transfer.css';

class Transfer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    }
  }

  render() {
    return(<div>
      Transfer
    </div>);
  }

}

export default Transfer;
