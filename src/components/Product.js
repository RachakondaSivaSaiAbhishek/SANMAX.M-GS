import React from 'react';
import Header from './Header';
import './Product.css';
import top1 from '../assets/images/top1.jpg';

const Product = () => {
  return (
    <div className='services'>
      <div className='topbanner' style={{ backgroundImage: `url(${top1})` }}>
        <Header backgroundImg={top1} />
        <h3 className='bannertitle'>
          Our <span className='spancolor'>Products</span>
        </h3>
        <br />
        <br />
        <br />
        <br />
        <p className='bannerdesc'>
          Delivering top-notch quality services to our customers is our priority.
        </p>
      </div>
      <div className='servicearea'></div>
    </div>
  );
};

export default Product;
