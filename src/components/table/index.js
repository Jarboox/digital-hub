import React from 'react';
import '../home/home.css';

function createTable(data) {
    
    let tr = [];

    for (const index in data) {
        tr.push(<tr>
            <td>{opacityAccount(data[index].account)}</td>
            <td>{data[index].balance.currency + `${data[index].balance.value}`}</td>
            <td>{data[index].createdAt}</td>
        </tr>);
    }

    return tr;
}

function opacityAccount(account) {
    let st = account.toString();
    let stf = st.slice(5, 10);
    return "*****" + stf;
}

export const CurrentTable = (props) => {
    return (<div className="cb-table">
        <h3 className="padding-left-10">Current Balance</h3>
        <table>
            <thead>
                <tr>
                    <th>Account No.</th>
                    <th>Balance</th>
                    <th>Date of Lastest Transfer</th>
                </tr>
            </thead>
            <tbody>
                {createTable(props.balance)}
            </tbody>
        </table>
    </div>);
}

function createHistoryTable(data) {
    
    let tr = [];

    for (const index in data) {
        tr.push(<tr>
            <td>{opacityAccount(data[index].fromAccount)}</td>
            <td>{data[index].toAccount}</td>
            <td>{data[index].amount.currency + `${data[index].amount.value}`}</td>
            <td>{data[index].sentAt}</td>
        </tr>);
    }

    return tr;
}

export const HistoryTable = (props) => {

    return (<div className="cb-table">
        <table>
            <thead>
                <tr>
                    <th>Origin account</th>
                    <th>Destination account</th>
                    <th>Transfer date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {createHistoryTable(props.transactions)}
            </tbody>
        </table>
    </div>);
}