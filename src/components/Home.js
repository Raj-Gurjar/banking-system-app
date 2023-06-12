import React, { useEffect, useState } from 'react';
import Service from '../components/Services';
import '../styles/home.scss';
import image from '../images/home-img.webp';
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
                        <h1 className="name">City Bank</h1>
                        <p>
                            Where Banking Meets Innovation and Convenience!
                        </p>
                    </div>
                    <div className="home_img">
                        <img src={image} alt="home-img" />
                    </div>
                </div>
            </div>
            <Service />
        </section>
    );
};

export default Home;
