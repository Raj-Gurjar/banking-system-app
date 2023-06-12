import React, { useState } from 'react'
import '../styles/transfer.css';

const TransferFunds = () => {



  return (
    <>
      <div className="box">
        <form>
        <h2>Transfer Money</h2>
          <select name="customers" id="customers1" placeholder='To'>
            {/* {done.map((item, i) => {
              return (
                <option key={i} id='option1' value={item.name}>{item.name}</option>
              )
            })} */}
          </select>

          <select name="customers" id="customers2" placeholder='From'>
        
          </select>

          {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div> */}

          <input type="number" id='amt' className='amount' placeholder='Enter Amount' required />
          <input type="submit" className='submitBtn' value="submit" />
        </form>
      </div>
    </>
  )
}

export default TransferFunds;