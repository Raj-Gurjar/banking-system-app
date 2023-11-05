import React from 'react'
import '../styles/footer.scss';
import bankLogo from '../images/logo2.png'


const Footer = () => {
  return (
    <div className="footer_cls">

      <div className="footer_cntr">


        <div className="handles">
          <img className='main-logo' src={bankLogo} alt='logo' />

          <div className="off-web">
            Address : 123, ABC Road, Mumbai - 400001
          </div>
        </div>

        <div className="contacts">
          <h2>Helplines</h2>
          <p>Contact No.:+91212121212</p>
          <p>Email id:help@citybank.com.in</p>

        </div>

        <div className="message">
          <h2>Message us</h2>
          <form className='forms' autoComplete='off'>
            <input type="text" name="name" id="name" placeholder='Name' required />
            <input type="text" name="email" id="email" placeholder='Email' required />
            {/* <input type="text" name="message" id="message"  /> */}
            <textarea rows="4" cols="10" name="comment" form="usrform" placeholder='Message' required>
            </textarea>
            <button>Submit</button>
          </form>
        </div>

        <h4>! This is just a Demo Website (City Bank is not real)</h4>
      </div>
    </div>
  )
}

export default Footer