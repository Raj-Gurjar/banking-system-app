import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import '../styles/moneyTransfer.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MoneyTransfer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
    });
  }, []);

  const data = collection(database, 'customers');
  const transactions = collection(database, 'transactions');

  const [done, setDone] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
    setDone(done);
  };

  getCustomers();

  const getAmount = (name, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cusName === name) {
        return arr[i].currBal;
      }
    }
  };

  const getId = (name, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cusName === name) {
        return arr[i].id;
      }
    }
  };

  const showPopupWithDuration = (message, duration) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, duration);
  };

  const transferFunds = (e) => {
    e.preventDefault();

    var select1 = document.getElementById('customers1');
    var value1 = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById('customers2');
    var value2 = select2.options[select2.selectedIndex].value;

    let amount = document.getElementById('amt').value;

    if (value1 === value2) {
      showPopupWithDuration('❌ Transaction cannot be done between the same users!', 2000);
      return;
    } else {
      if (getAmount(value1, done) < amount) {
        showPopupWithDuration('❌ Insufficient balance', 2000);
        return;
      }

      let user1_id = getId(value1, done);
      let user2_id = getId(value2, done);

      let user1_amount = getAmount(value1, done);
      let user2_amount = getAmount(value2, done);

      let docToUpdate1 = doc(database, 'customers', `${user1_id}`);
      let docToUpdate2 = doc(database, 'customers', `${user2_id}`);

      let balanceOfUser1 = user1_amount - amount;
      let balanceOfUser2 = user2_amount + Number(amount);

      updateDoc(docToUpdate1, {
        currBal: balanceOfUser1,
      });

      updateDoc(docToUpdate2, {
        currBal: balanceOfUser2,
      })
        .then(() => {
          showPopupWithDuration('✅ Transaction Successfully', 2000);
        })
        .catch((err) => {
          showPopupWithDuration('❌ Technical Error! Try Again', 2000);
          console.log('ERRR' + err);
        });

      addDoc(transactions, {
        from: value1,
        to: value2,
        Amount_transfered: amount,
      });

      e.preventDefault();
    }
  };

  return (
    <section className="transfer_sec">

      <div className="container">

        <div className="transfer_box" data-aos="fade-up" data-aos-delay="100">
          <form onSubmit={transferFunds}>
            <h2 className='heading'>Transfer Money</h2>
            
            <select name="customers" id="customers1" placeholder="Debited from">
              <option value="">Debit from</option>
              {done.map((item, i) => (
                <option key={i} value={item.cusName}>
                  {item.cusName} (Aval. Bal ₹{item.currBal})
                </option>
              ))}
            </select>

            <select name="customers" id="customers2" placeholder="Credited to">
              <option value="">Credit to </option>

              {done.map((item, i) => (
                <option key={i} value={item.cusName}>
                  {item.cusName} (Aval. Bal ₹{item.currBal})
                </option>
              ))}
            </select>

            <input type="number" id="amt" className="amount" placeholder="Enter Amount (in ₹)" required />

            <input type="submit" className="submitBtn" value="Submit" />
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <p className="success">{popupMessage}</p>
        </div>
      )}
    </section>
  );
};

export default MoneyTransfer;
