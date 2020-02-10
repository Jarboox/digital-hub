import React, { Component } from 'react';
import PieChart from '../pieChart';
import {  HistoryTable } from '../table';
import { transactionHistory, currentBalance } from '../../services/api';
import './transfer.css';
import { groupBy } from '../../utils';

class Transfer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      balance: [],
      tables: [],
      originAccount: '',
      destinationAccount: '',
      amount: ''
    }
  }

  componentDidMount() {
    currentBalance((data) => {
      this.setState({
        balance: data
      })
    });

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
  
    tables = groupBy(this.state.history, "fromAccount");

    for (let zindex in tables) {
      components.push(<HistoryTable key={zindex} transactions={tables[zindex]} />)
    }

    return components;
  }

  options() {
    let options = [];

    for (let index in this.state.balance) {
      const a = this.state.balance[index].account;
      options.push(<option key={index} value={index}>{a}</option>)
    }

    return options;
  }

  clearForm (e) {
    this.setState({
      originAccount: '',
      destinationAccount: '',
      amount: ''
    });
  }

  transfer() {
    const lRegex = /^[0-9]{8}$/;
		const dAccount = this.state.balance[this.state.originAccount];

		if (typeof dAccount === "undefined") return false;

		const amount = parseFloat(this.state.amount);

		if (dAccount.balance.value < amount || amount > 100000) {
			return false;
		}

    if (dAccount.account && this.state.destinationAccount.length 
        && lRegex.test(this.state.destinationAccount)) {
				let tmpHistory = [...this.state.history];
				tmpHistory.push({
						fromAccount: dAccount.account,
            toAccount: this.state.destinationAccount,
            amount: {
                currency: dAccount.balance.currency,
                value: amount
            },
            sentAt: Date.now()
				});
				this.setState({
					history: tmpHistory
				})
    } else {
			return false;
		}
  }

  render() {
    return(<div>
      <div className="row">
        <div className="col-6">
          <h3 className="padding-left-10">Create a new transfer</h3>
          <form className="me-padding" id="transferForm">
            <div className="transfer-form">
              <label htmlFor="originAccount">Select origin account</label>
              <select name="originAccount" 
                value={this.state.originAccount} onChange={(e) => this.change(e)}>
                <option value="" disabled>Account</option>
                {this.options()}
              </select>

              <label htmlFor="destinationAccount">Destination account</label>
              <input name="destinationAccount" type="text"
                value={this.state.destinationAccount} onChange={(e) => this.change(e)} />

              <label htmlFor="amount">Amount</label>
              <input name="amount" type="number"
                value={this.state.amount}
                step="any" onChange={(e) => this.change(e)} />
            </div>
            <div className="tf-buttons">
              <div className="buttons">
                <button className="blue-button" type="submit" onClick={(e) => {
                  e.preventDefault();
                  this.transfer();
                }}>Transfer</button>
                <button className="gray-button" type="cancel" onClick={(e) => {
                  e.preventDefault();
                  this.clearForm(e);
                }}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <PieChart history={this.state.history}/>
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
