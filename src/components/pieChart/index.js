import React from 'react';
import { Pie } from 'react-chartjs-2';
import { groupBy } from '../../utils';

export default (props) => {

    const groups = groupBy(props.history, "toAccount");
    let myLabels = [];
    let totals = [];
    let colors = ['#c9ce33', '#ae24a7',
        '#86aa3a', '#da51b8',
        '#bf25f4', '#95c063',
        '#7fb479', '#d4c851',
        '#5b765', '#5f5d8d',
        '#321bbd', '#ee2ec1',
        '#8bb978', '#ab0444',
        '#6feeb5', '#440b54', 
        '#2b6b0a', '#41aeed', 
        '#5d2bbe', '#bee653', 
    ];

    for (let index in groups) {
        let total = 0;
        myLabels.push(groups[index][0].toAccount);
        for (let zindex in groups[index]) {
            total += groups[index][zindex].amount.value;
        }
        totals.push(total);
    }

    const data = {
        labels: myLabels,
        datasets: [{
            data: totals,
            backgroundColor: colors
        }]
    };
    

    return (<div>
        <Pie data={data} />
    </div>);
}