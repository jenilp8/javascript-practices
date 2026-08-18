import { transactions } from '../arrayFunction.js';

// Return the total of all credit amounts.

const totalCreditAmount = transactions.reduce((acc, transaction) => {
    if (transaction.type === "credit") {
        return acc += transaction.amount;
    }
    return acc;
}, 0);

console.log(totalCreditAmount);


// Return the total of all debit amounts.

const totalDebitAmount = transactions.reduce((acc, transaction) => {
    if (transaction.type === "debit") {
        return acc += transaction.amount;
    }

    return acc;
}, 0);

console.log(totalDebitAmount);


// Return the net balance (credits − debits).

const netBalance = transactions.reduce((acc, transaction) => {
    let net = 0;
    if (transaction.type === "credit") {
        return net += acc + transaction.amount;
    } else if (transaction.type === "debit") {
        return net += acc - transaction.amount;
    }
    return acc;
}, 0);

console.log(netBalance);


// Group transactions into an object keyed by category, each holding an array of matching transactions.

const categoryTransactions = transactions.reduce((acc, transaction) => {
    let category = transaction.category;

    if (!acc[category]) {
        acc[category] = [];
    }

    acc[category].push(transaction);
    return acc;
}, {});

console.log(categoryTransactions);


// Return the total amount spent per category as { groceries: 75.5, utilities: 120, ... }

const totalAmountPerCategory = transactions.reduce((acc, transaction) => {
    let category = transaction.category;
    if(!acc(category)) {
        acc(category )
    }
} ,{});