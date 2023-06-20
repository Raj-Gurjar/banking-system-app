import React, { useEffect, useState } from 'react';
import Service from '../components/Services';
import '../styles/home.scss';
import home_image from '../images/home-img.webp';
import banklogo from '../images/logo3.png';
import wallet from '../images/wallet.png';
import fstMny from '../images/fastMoney.png';
import easyP from '../images/easyP.png';

import { Redirect } from 'react-router-dom';

const Home = () => {
    const [greet, setGreet] = useState('');

    useEffect(() => {
        const myDate = new Date();
        const hrs = myDate.getHours();

        let greeting;

        if (hrs < 12) greeting = 'Good Morning,';
        else if (hrs >= 12 && hrs <= 17) greeting = 'Good Afternoon,';
        else if (hrs >= 17 && hrs <= 24) greeting = 'Good Evening,';

        setGreet(greeting);
    }, []);

    return (
        <section className="home_cls section_padding">
            <div className="container">
                <div className="row align_cntr">
                    <div className="home_txt">

                        <p1 className="greetings">Welcome to,</p1>
                        <h1 className="name_logo_bx">
                            <img src={banklogo} alt="" />
                        </h1>
                        <p>
                            Where Banking Meets Innovation and Convenience!
                        </p>

                        <div className="features">
                            <div className="ft">
                                <img src={easyP} alt="wallet_img" />
                                <span>Easy Payments</span>
                            </div>
                            <div className="ft">
                                <img src={fstMny} alt="wallet_img" />
                                <span>Fast Payments</span>
                            </div>
                            <div className="ft">
                                <img src={wallet} alt="wallet_img" />
                                <span>Secure Payments</span>
                            </div>
                           



                        </div>
                    </div>
                    <div className="home_img">
                        <img src={home_image} alt="home-img" />
                    </div>
                </div>
            </div>
            <Service />
        </section>
    );
};

export default Home;
