import React from 'react'
import "../styles/transHistory.scss";

function Customer({i,from,to,amount,status}) {

  return (
    <div key={i+1}  className="cust">
      <h3>Sender : {from}</h3>
      <h3>Reciever :  {to}</h3>
      <h3>Amount-Transfered : Rs.{amount}</h3>
      <h3>Status : {status}</h3>
      <br/>
    </div>
  )
}

export default Customer;