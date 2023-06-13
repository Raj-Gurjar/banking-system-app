import React, { useState } from 'react'
import '../styles/transfer.scss';

const TransferFunds = () => {

  return (

    <section className="transfer_sec">
      <div className="container">

        <div className="transfer_box">
          <form>
            <h2>Transfer Money</h2>
            <select name="customers" id="customers1" placeholder='To'>

            </select>

            <select name="customers" id="customers2" placeholder='From'>

            </select>


            <input type="number" id='amt' className='amount' placeholder='Enter Amount' required />
            <input type="submit" className='submitBtn' value="Submit" />
          </form>
        </div>

      </div>
    </section>

  )
}

export default TransferFunds;