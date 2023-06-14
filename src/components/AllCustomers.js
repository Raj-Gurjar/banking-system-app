
import React from 'react'
import '../styles/allcustomers.scss';

const AllCustomers = () => {

  const personsData = [
    { serialNo: 1, name: 'John Doe', accountNumber: '1234567890', balance: 5000 },
    { serialNo: 2, name: 'Jane Smith', accountNumber: '0987654321', balance: 10000 },
    { serialNo: 3, name: 'Michael Johnson', accountNumber: '5678901234', balance: 7500 },
    { serialNo: 4, name: 'Michael Johnson', accountNumber: '5678901234', balance: 7500 },
    { serialNo: 5, name: 'Michael Johnson', accountNumber: '5678901234', balance: 7500 },
    { serialNo: 6, name: 'Michael Johnson', accountNumber: '5678901234', balance: 7500 },
    // Add more data here...
  ];

  return (
    <section className='customers_sec'>

      <div className='heading row justify_content_cntr'>
        <h2>All Customers Information</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Account Number</th>
            <th>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          {personsData.map((person, index) => (
            <tr key={index}>
              <td>{person.serialNo}</td>
              <td>{person.name}</td>
              <td>{person.accountNumber}</td>
              <td>{person.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </section>
  )
}

export default AllCustomers