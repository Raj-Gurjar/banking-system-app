import React from 'react';
import 'aos/dist/aos.css';
import customerImg from '../images/customers.png';
import history from '../images/history.png';
import transferImg from '../images/transfer.png';
import '../styles/services.scss';


const servicesData = [
  {
    image: customerImg,
    title: 'View and Add Customers',
    desc: 'List of customers',
    link: '/allCustomers',
    btn: 'View Customers',
  },
  {
    image: transferImg,
    title: 'Transfer Money',
    desc: 'Money transfer can be done',
    link: '/moneyTransfer',
    btn: 'Transfer',
  },
  {
    image: history,
    title: 'View Transactions',
    desc: 'All transactions are displayed',
    link: '/transactions',
    btn: 'View Transactions',
  },
];

const Services = () => {
  return (
    <div className="services_cls section_padding">

      <h1 className="main-title heading">Services</h1>

      <div className="services-box">

        {servicesData.map((service, index) =>
        (
          <div key={index} data-aos="zoom-in-right" data-aos-delay="0" className="card">

            <img src={service.image} alt={`${service.title} img`} />

            <div className="service-name">{service.title}</div>
            <div className="service-desc">{service.desc}</div>

            <a href={service.link}>
              <button>{service.btn}</button>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
