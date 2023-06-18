import React from 'react'
import Header from './Header'
import './Services.css'
import shocks from '../assets/images/shocks.jpg';
import clean from '../assets/images/clean.png';
import diagno from '../assets/images/Diagno.png';
import oil from '../assets/images/oil.png';
import tune from '../assets/images/tune.png';
import main from '../assets/images/maintain.png';
const Services = () => {
  return (
    <div className='services'>
        <div className='topbanner'>
            <Header/>
            <h3 className='bannertitle'> Our <span className='spancolor' >Services</span></h3><br/><br/>
            <p className='bannerdesc'>Delivering a top notch quality services to our customers
            is our priority</p>

        </div>
        <div className='servicearea'>
            <h3>What we Do</h3>
            <div className='servicelist'>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Our garage servicing company specializes in expert shock repair, ensuring smooth and comfortable rides for your vehicle. </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={oil} alt=''/>
                       <div className='servicecard'>
                            <h4>Oil and lubrication of brakes</h4>
                            <p>Trust us to provide top-notch oil and brake lubrication services, enhancing your vehicle's performance and safety on the road.</p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={clean} alt=''/>
                       <div className='servicecard'>
                            <h4>Cleaning</h4>
                            <p> Our comprehensive cleaning services will leave your vehicle spotless, both inside and out, giving it a fresh and polished look.</p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={diagno} alt=''/>
                       <div className='servicecard'>
                            <h4>Inspection and analysis</h4>
                            <p>With our thorough inspection and analysis services, we identify any underlying issues, providing you with accurate diagnostics for prompt repairs.</p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={tune} alt=''/>
                       <div className='servicecard'>
                            <h4>Tuning performance</h4>
                            <p>Experience optimal performance with our precision tuning services, fine-tuning your vehicle's engine and systems to maximize efficiency and power.</p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={main} alt=''/>
                       <div className='servicecard'>
                            <h4>Machinery for heavy loads</h4>
                            <p>Our garage is equipped with state-of-the-art machinery designed to handle heavy loads, ensuring efficient maintenance and repairs for vehicles.</p>
                        </div>
                  </div>
           
            </div>

        </div>

    </div>

    
  )
}

export default Services