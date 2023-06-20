import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import History from './History';
import '../styles/transHistory.scss'

const TransHistory = () => {


  return (
    <section className="transactions_cls">
      <div className="heading row justify_content_cntr">
        <h2>All Transactions Information</h2>
      </div>

      <div className="history-box">

        <div className="his1">
          <h3>Sender : Raj</h3>
          <h3>Reciever :  vikas</h3>
          <h3>Amount-Transferred : Rs.333</h3>
          <h3>Status : success</h3>
        </div>

        <div className="his1">
          <h3>Sender : raj</h3>
          <h3>Reciever :  vikas</h3>
          <h3>Amount : Rs.333</h3>
          <h3>Status : success</h3>
        </div>

        <div className="his1">
          <h3>Sender : raj</h3>
          <h3>Reciever :  vikas</h3>
          <h3>Amount : Rs.333</h3>
          <h3>Status : success</h3>
        </div>

      </div>

    </section>
  );
};

export default TransHistory;
