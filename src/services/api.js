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