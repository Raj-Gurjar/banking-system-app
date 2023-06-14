import React from 'react';
import '../styles/allcustomers.scss';

const Transactions = () => {
  // Generate random data for transactions
  const generateRandomData = () => {
    const transactionsData = [];
    const statuses = ['Completed', 'Pending', 'Failed'];

    for (let i = 1; i <= 10; i++) {
      const transaction = {
        serialNo: i,
        debitedFrom: `Account ${Math.floor(Math.random() * 1000)}`,
        creditedTo: `Account ${Math.floor(Math.random() * 1000)}`,
        amount: Math.floor(Math.random() * 10000),
        status: statuses[Math.floor(Math.random() * statuses.length)],
      };
      transactionsData.push(transaction);
    }

    return transactionsData;
  };

  const transactionsData = generateRandomData();

  return (
    <section className='transactions_cls'>
      <div className="heading row justify_content_cntr">
        <h2>All Transactions Information</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Debited From</th>
            <th>Credited To</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.serialNo}</td>
              <td>{transaction.debitedFrom}</td>
              <td>{transaction.creditedTo}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
