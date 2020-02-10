import React, { Component } from 'react';
import './home.css';
import Expenses from '../expenses';
import PieChart from '../pieChart';
import { CurrentTable } from '../table';
import { currentBalance } from '../../services/api';
import { Lorem } from './lorem';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      balance: []
    }

  }

  componentDidMount() {
    currentBalance((data) => {
      this.setState({
        balance: data
      })
    });
  }

  render() {

    return(<div>
      <h3 className="username">Welcome to your online banking { this.props.user.username }</h3>
        <div className="row">
          <div className="col"> 
            <div className="me-padding">
              <PieChart/>
              <h3>Transactions History</h3>
              <Lorem/>
            </div>
          </div>
          <div className="col"> <Expenses/> </div>
          <div className="col"> <CurrentTable balance={this.state.balance}/> </div>
        </div>
    </div>);
  }

}

export default Home;