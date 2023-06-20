import React from 'react';
import 'aos/dist/aos.css';

import Service from './Service';
import '../styles/services.scss';
import customerImg from '../images/customers.png';
import history from '../images/history.png';
import transferImg from '../images/transfer.png';

const Services = () => {
  return (
    <div className='services-box'>
      <div className="main-title">
        Services
      </div>
      <div className="container-1">
        <Service image={customerImg} title="View and Add Customers" desc="List of customers" link="/allCustomers" btn="View Customers" />

        <Service image={transferImg} title="Transfer Money" link="/moneyTransfer" desc="Money transfer can be done" btn="Transfer" />

        <Service image={history} title="View Transactions" link="/transactions" desc="All transactions are displayed" btn="View Transactions" />
      </div>
    </div>
  )
}

export default Services