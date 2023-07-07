import React from 'react';
import Header from './Header';
import './Services.css';
import serviceImg from '../assets/images/service.jpg';
import oil from '../assets/images/oil.png';
import shocks from '../assets/images/shocks.jpg';
import tune from '../assets/images/tune.png';
import Diagno from '../assets/images/Diagno.png';
import brk from '../assets/images/Break.png';
import cle from '../assets/images/clean.png';
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
            <div className='servicelist'>
                  <div className='servicecard1'>
                       <img className='imagecard' src={tune} alt=''/>
                       <div className='servicecard'>
                            <h4>Fine Tuning </h4>
                            <p>Details about Tuning  </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={brk} alt=''/>
                       <div className='servicecard'>
                            <h4>Break Testing </h4>
                            <p>Details about Breaks and grips </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={Diagno} alt=''/>
                       <div className='servicecard'>
                            <h4>Diagnosis and analysing </h4>
                            <p>Details about Diagnosis </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={cle} alt=''/>
                       <div className='servicecard'>
                            <h4>Cleaning </h4>
                            <p>Details about cleaning</p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={oil} alt=''/>
                       <div className='servicecard'>
                            <h4>Oil and lubrication</h4>
                            <p>Deatails about Oils
                           </p>
                        </div>
                  </div>
           
            </div>

        </div>
    </div>
  );
};

export default Services;
