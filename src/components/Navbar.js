import React from 'react'
import bankLogo from '../images/banklogo-1.png'
import '../styles/navbar.scss'

const Navbar = () => {
    return (
        <navbar>
            <div class="container">
                <div class="row space_btw">
                    <div class="logo">
                        <img src="mediaaa/mylogo2.png" />
                    </div>

                    <ul class="menu">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/allCustomers'>View all accounts</a></li>
                        <li><a href='/moneyTransfer'>Transfer funds</a></li>
                        <li><a href='/transactions'>Transactions</a></li>
                    </ul>

                </div>

            </div>
        </navbar>

    )
}

export default Navbar;
