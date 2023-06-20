import React from 'react'
import "../styles/transHistory.scss";

function Customer({i,from,to,amount,status}) {

  return (
    <div key={i+1}  className="his1">
      <h3>Sender : {from}</h3>
      <h3>Reciever :  {to}</h3>
      <h3>Amount-Transferred : Rs.{amount}</h3>
      <br/>
    </div>
  )
}

export default Customer;