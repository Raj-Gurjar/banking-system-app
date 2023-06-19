import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import History from './History';
import '../styles/transHistory.scss'

const TransHistory = () => {

  const data = collection(database, 'transactions');

  const [done, setDone] = useState([])

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data() }
    });
    setDone(done)
  }

  getCustomers();

  return (
    <section className="transactions_cls">
      <div className="heading row justify_content_cntr">
        <h2>All Transactions Information</h2>
      </div>
     
      <div className="history-box">
        <div className="row1">
          {done.map((item, i) => {
            return (
              <History
                key={i + 1} from={item.from}
                to={item.to}
                amount={item.Amount_transfered}
                status={item.Status ? "true" : "false"}
              />
            )
          })}
        </div>

      </div>

    </section>
  );
};

export default TransHistory;
