/**
 * For this section I use axios or fetch for request to api,
 * in this case only I will simulate it
 */

export const currentBalance = (callback) => {
    const currentBalance = {
        balance: [{
            account: 123456789,
            balance: {
                currency: "€",
                value: 765095.54 
            },
            owner: 7612333392,
            createdAt: "2012-04-23T18:25:43.511Z"
        }, {
            account: 987654321,
            balance: {
                currency: "$",
                value: 524323.54
            },
            owner: 7612333392,
            createdAt: "2012-04-23T18:25:43.511Z"
        }
    ]};

    setTimeout(callback(currentBalance.balance), 2000);
}

export const transactionHistory = (callback) => {
    const history = {
        transactions: [{
            fromAccount: 123456789,
            toAccount: 192837465,
            amount: {
                currency: "€",
                value: 876.88
            },
            sentAt: "2012-04-23T18:25:43.511Z"
        }, {
            fromAccount: 123456789,
            toAccount: 192837465,
            amount: {
                currency: "€",
                value: 654.88
            },
            sentAt: "2012-04-21T18:25:43.511Z"
        }, {
            fromAccount: 987654321,
            toAccount: 543216789,
            amount: {
                currency: "$",
                value: 543
            },
            sentAt: "2012-04-23T18:25:43.511Z"
        }, {
            fromAccount: 987654321,
            toAccount: 543216789,
            amount: {
                currency: "$",
                value: 987.54
            },
            sentAt: "2012-04-23T18:25:43.511Z"
        }]
    };

    setTimeout(callback(history.transactions), 2000);
}