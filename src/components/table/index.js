import React from 'react';
import '../home/home.css';

function createTable(data) {
    
    let tr = [];

    for (const index in data) {
        console.log(data[index]);
        tr.push(<tr>
            <td>{data[index].account}</td>
            <td>{data[index].balance.currency + `${data[index].balance.value}`}</td>
            <td>{data[index].createdAt}</td>
        </tr>);
    }


    return tr;
}

export const CurrentTable = (props) => {

    return (<div className="cb-table">
        <h3>Current Balance</h3>
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