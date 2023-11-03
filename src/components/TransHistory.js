import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebaseConfig';
// import History from './History';
import '../styles/transHistory.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TransactionHistory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  

  const data = collection(database, 'transactions');

  const [done, setDone] = useState([]);

  const getTransactions = async () => {
    const res = await getDocs(data);
    const transactions = res.docs.map((item) => {
      return { ...item.data() };
    });
    setDone(transactions);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <section className="transactions_cls">
      <div className="heading row justify_content_cntr" data-aos="fade-up" data-aos-delay="100">
        <h2>All Transactions' Information</h2>
      </div>

      <div className="tbl-cntr">
        <table data-aos="zoom-in" data-aos-delay="0">
          <thead>
            <tr>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount Transferred</th>
              {/* <th>Time</th>
              <th>Status</th> */}
            </tr>
          </thead>
          <tbody data-aos="fade-up" data-aos-delay="100">
            {done.map((item, index) => (
              <tr key={index + 1} className="values">
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>Rs.{item.Amount_transfered}</td>
                {/* <td>{item.time}</td>
                <td>{item.status}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionHistory;
