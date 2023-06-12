import React, { useState } from 'react'
import '../styles/allcustomers.css'

const Transactions = () => {


  return (
    <>
      <div></div>

      <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>From</th>
          <th>To</th>
          <th>Amount transfered</th>
          <th>Status</th>
        </tr>
        {/* {done.map((item, i) => {
          return (
            <tr key={i} className='values'>
              <td>{i + 1}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.Amount_transfered}</td>
              <td>{item.Status ? 'true' : 'false'}</td>
            </tr>
          )
        })} */}
      </table>
    </>
  )
}

export default Transactions;