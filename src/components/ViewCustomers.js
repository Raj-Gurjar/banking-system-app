import React, { useEffect, useState } from 'react';
import '../styles/viewCustomers.scss';
import { database } from '../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import AddCustomer from './AddCustomers';

const ViewCustomers = () => {
  const [customersList, setCustomersList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState('Add Customer');
  const [showDeletePopup, setShowDeletePopup] = useState(false); // Track whether the delete popup should be shown
  const [showAddPopup, setShowAddPopup] = useState(false); // Track whether the add popup should be shown

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersRef = collection(database, 'customers');
        const querySnapshot = await getDocs(customersRef);
        const customersData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCustomersList(customersData);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    setButtonText(showForm ? 'Add Customer' : 'Close');
  };

  const handleAddCustomer = async () => {
    // Fetch the updated customers data
    const customersRef = collection(database, 'customers');
    const querySnapshot = await getDocs(customersRef);
    const customersData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCustomersList(customersData);

    // Show the add popup
    setShowAddPopup(true);

    // Automatically close the popup after 3 seconds
    setTimeout(() => {
      setShowAddPopup(false);
    }, 3000);
  };

  const handleDeleteCustomer = async (customerId) => {
    try {
      const customerDocRef = doc(database, 'customers', customerId);
      await deleteDoc(customerDocRef);

      // Update the customers list after deletion
      const updatedCustomers = customersList.filter(
        (customer) => customer.id !== customerId
      );
      setCustomersList(updatedCustomers);

      // Show the delete popup
      setShowDeletePopup(true);

      // Automatically close the popup after 3 seconds
      setTimeout(() => {
        setShowDeletePopup(false);
      }, 3000);
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <section className='customers_sec'>
      <div className='heading row justify_content_cntr'>
        <h2>All Customers Information</h2>
      </div>

      <button className='add_btn' onClick={toggleForm}>{buttonText}</button>

      {showForm && (
        <div className='add-customer-popup'>
          <AddCustomer onAddCustomer={handleAddCustomer} />
        </div>
      )}

      {showDeletePopup && (
        <div className='delete-popup'>
          <p>Customer deleted successfully!</p>
        </div>
      )}

      {showAddPopup && (
        <div className='add-popup'>
          <p>Customer added successfully!</p>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Account Number</th>
            <th>Email ID</th>
            <th>Current Balance (in Rs.)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customersList.map((customer, index) => (
            <tr key={customer.id} className='values'>
              <td>{index + 1}</td>
              <td>{customer.cusName}</td>
              <td>{customer.accNo}</td>
              <td>{customer.emailiD}</td>
              <td>{customer.currBal}</td>
              <td>
                <button  className='del_btn' onClick={() => handleDeleteCustomer(customer.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ViewCustomers;
