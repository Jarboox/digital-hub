import React, { Component } from 'react';
import PieChart from '../pieChart';
import {  HistoryTable } from '../table';
import { transactionHistory } from '../../services/api';
import './transfer.css';

class Transfer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      tables: [],
      originAccount: '',
      destinationAccount: '',
      amount: ''
    }
  }

  componentDidMount() {
    transactionHistory((data) => {
      this.setState({
        history: data
      })
    });
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
}

  tables() {

    let tables = [];
    let components = [];
    let tmpAccount = 0;
  
    for (let index in this.state.history) {
        const current = this.state.history[index].fromAccount;
        if (current === tmpAccount) continue;
        const tmpData = [... this.state.history];
        const toTable = tmpData.filter((item) => {
            return current === item.fromAccount;
        });
        tmpAccount = current;
        tables.push(toTable);
    }

    for (let zindex in tables) {
      components.push(<HistoryTable transactions={tables[zindex]} />)
    }

    return components;
  }

  cForm () {

  }

  render() {
    return(<div>
      <div className="row">
        <div className="col-6">
          <h3 className="padding-left-10">Create a new transfer</h3>
          <form className="me-padding" id="transferForm">
            <div className="transfer-form">
              <label for="originAccount">Select origin account</label>
              <select name="originAccount" 
                value={this.state.originAccount} onChange={(e) => this.change(e)}>
                <option value="123456789"> 123456789 </option>
                <option value="987654321"> 987654321 </option>
              </select>

              <label for="destinationAccount">Destination account</label>
              <input name="destinationAccount" type="text" min="8" 
                value={this.state.destinationAccount} onChange={(e) => this.change(e)} />

              <label for="amount">Amount</label>
              <input name="amount" type="number"
                value={this.state.amount}
                step="any" onChange={(e) => this.change(e)} />
            </div>
            <div className="tf-buttons">
              <div className="buttons">
                <button className="blue-button">Transfer</button>
                <button className="gray-button" type="cancel" onClick={() => {
                  this.cForm();
                }}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <PieChart/>
        </div>
      </div>
      <div className="row">
        <div className="h-tables">
          {this.tables()}
        </div>
      </div>
    </div>);
  }

}

export default Transfer;
