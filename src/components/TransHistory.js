import React, { useState,useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import History from './History';
import '../styles/transHistory.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TransHistory = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
    });
  }, []);

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
      <div className="heading row justify_content_cntr" data-aos="fade-up" data-aos-delay="100">
        <h2>All Transactions' Information</h2>
      </div>

      <div className="history-box">


        {done.map((item, i) => {
          return (
              <History
                key={i + 1} from={item.from}
                to={item.to}
                amount={item.Amount_transfered}
              />
          )
        })}
      </div>



    </section>
  );
};

export default TransHistory;
