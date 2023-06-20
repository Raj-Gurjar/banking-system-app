import React from 'react';
import '../styles/service.scss';



const Service = (props) => {
  return (
    <div data-aos="zoom-in-right" data-aos-delay="0" className="card">
      <img src={props.image} alt="Customer img" />
      <div className="service-name">{props.title}</div>
      <div className="service-desc">{props.desc}</div>
      <a href={props.link}>
        <button>{props.btn}</button>
      </a>
    </div>
  )
}

export default Service