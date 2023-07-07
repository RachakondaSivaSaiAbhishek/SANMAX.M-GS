import React from 'react';
import Header from './Header';
import './Services.css';
import serviceImg from '../assets/images/service.jpg';

const Services = () => {
  return (
    <div className='services'>
      <div className='topbanner' style={{ backgroundImage: `url(${serviceImg})` }}>
        <Header backgroundImg={serviceImg} />
        <h3 className='bannertitle'>
          Our <span className='spancolor'>Services</span>
        </h3>
        <br />
        <br />
        <p className='bannerdesc'>
          Delivering top-notch quality services to our customers is our priority.
        </p>
      </div>
      <div className='servicearea'>
        <h3>What we Do</h3>
        {/* Rest of the code */}
      </div>
    </div>
  );
};

export default Services;
