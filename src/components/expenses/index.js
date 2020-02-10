import React from 'react';
import '../home/home.css';

import expensesImg from '../../images/expenses.png';
import { Lorem } from '../home/lorem';

export default () => {
    return (
        <div>
            <div className="me-div">
                <img src={expensesImg}/>
            </div>

            <div className="me-padding">
                <h3>Main Expenses</h3>
                <Lorem/>
            </div>
        </div>
    );
}