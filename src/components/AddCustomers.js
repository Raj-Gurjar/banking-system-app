import React, { useState } from 'react';
import '../styles/addcustomers.scss';
import { database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddCustomer = ({ onAddCustomer }) => {
  const [newCustomer, setNewCustomer] = useState({
    cusName: '',
    accNo: '',
    emailiD: '',
    currBal: '',
  });
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  };

  const addCustomer = async () => {
    if (!isFormValid()) {
      return;
    }

    try {
      const customersRef = collection(database, 'customers');

      // Add the new customer to the database
      await addDoc(customersRef, newCustomer);

      // Clear the new customer input fields
      setNewCustomer({
        cusName: '',
        accNo: '',
        emailiD: '',
        currBal: '',
      });

      // Callback function to notify parent component
      if (typeof onAddCustomer === 'function') {
        onAddCustomer();
      }
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const isFormValid = () => {
    if (
      newCustomer.cusName.trim() === '' ||
      newCustomer.accNo.trim() === '' ||
      newCustomer.emailiD.trim() === '' ||
      newCustomer.currBal.trim() === ''
    ) {
      setFormError('❗Please fill in all fields.');
      return false;
    }

    setFormError('');
    return true;
  };

  return (
    <section className='addCustomer_cls'>


      <div className='new-customer-form'>
        <h3>New Customer Details</h3>
        <input
          type='text'
          name='cusName'
          value={newCustomer.cusName}
          onChange={handleInputChange}
          placeholder='Name'
        />
        <input
          type='text'
          name='accNo'
          value={newCustomer.accNo}
          onChange={handleInputChange}
          placeholder='Account Number'
        />
        <input
          type='text'
          name='emailiD'
          value={newCustomer.emailiD}
          onChange={handleInputChange}
          placeholder='Email ID'
        />
        <input
          type='text'
          name='currBal'
          value={newCustomer.currBal}
          onChange={handleInputChange}
          placeholder='Add Balance (in Rs.)'
        />
        <button onClick={addCustomer}>Add Customer</button>
        {formError && <p className='error'>{formError}</p>}
      </div>
    </section>
  );
};

export default AddCustomer;
