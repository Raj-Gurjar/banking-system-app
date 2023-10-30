import React, { useEffect} from 'react';
import Service from '../components/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.scss';
import home_image from '../images/home-img.webp';
import banklogo from '../images/logo3.png';
import wallet from '../images/wallet.png';
import fstMny from '../images/fastMoney.png';
import easyP from '../images/easyP.png';


const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
        });
      }, []);

 
    return (
        <section className="home_cls section_padding">
            <div className="container">
                <div className="row align_cntr">

                    <div className="home_txt">

                        <p1 className="greetings">Welcome to,</p1>
                        <h1 data-aos="fade-right" data-aos-delay="0" className="name_logo_bx">
                            <img src={banklogo} alt="" />
                        </h1>
                        <p>
                            Where Banking Meets Innovation and Convenience!
                        </p>

                        <div className="features">
                            <div data-aos="fade-up-right" data-aos-delay="20" className="ft">
                                <img src={easyP} alt="wallet_img" />
                                <span>Easy Payments</span>
                            </div>
                            <div data-aos="fade-up-right" data-aos-delay="20" className="ft">
                                <img src={fstMny} alt="wallet_img" />
                                <span>Fast Payments</span>
                            </div>
                            <div data-aos="fade-up-right" data-aos-delay="20" className="ft">
                                <img src={wallet} alt="wallet_img" />
                                <span>Secure Payments</span>
                            </div>
                           

                        </div>
                    </div>

                    <div  className="home_img">
                        <img src={home_image} alt="home-img" />
                    </div>
                </div>
            </div>
            <Service />

            
        </section>
    );
};

export default Home;
