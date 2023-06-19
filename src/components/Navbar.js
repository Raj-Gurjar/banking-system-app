import React from 'react'
import bankLogo from '../images/logo1.png'
import '../styles/navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="row space_btw">
                    <div className="logo">
                        <a href="/">
                            <img src={bankLogo} alt="logo" />
                        </a>
                    </div>

                    <ul className="menu">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/allCustomers'>View all accounts</a></li>
                        <li><a href='/moneyTransfer'>Money Transfer</a></li>
                        <li><a href='/transactions'>Transactions</a></li>
                    </ul>

                </div>

            </div>
        </nav>

    )
}

export default Navbar;
