import React from 'react'
import './Description.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';



const Description = () => {
  return (
    <div className='description'>
        <div className='content'>
            <div className='titledesc'>
                <p className='p1'>We Care</p>
                <p className='p2'>About Your Car</p>
            </div>
            <div className='divider'></div>
            <div className='details'>
                    <h1>Our Services</h1>
                    <div className='services'>
                        <ul>
                            <li className='li'>Auto Maintenance Services</li>
                            <li className='li'>Brake Repair Pads & Rotors​</li>
                            <li className='li'>System Diagnosis & Repair​​</li>
                            <li className='li'>Air Conditioning Services​​</li>
                            <li className='li'>Tires & Wheel Balancing​​</li>
                            <li className='li'>Shocks, Struts Replacement​</li>
                        </ul>
                        <Link to={'/services' }><button className='button'>Services</button></Link>
                    </div>
                    
            </div>
            <div className='divider'></div>
            <div className='details'>
                    <h1>Custom Services  </h1>
                    <div className='workinghours'>
                        <ul>
                            <li className='li'>Batteries</li>
                            <li className='li'>Brakes & Body Parts</li>
                            <li className='li'>AC parts</li>
                            <li className='li'>Clutch</li>
                            <li className='li'>Lights</li>
                            <li className='li'>Glasses</li>
                            <li className='li'>Tyres</li>
                            <li className='li'>Steering</li>
                            <li className='li'>Suspension</li>
                            <li className='li'>Engine Oil & Cleaning</li>
                            
                        </ul>
                    </div>    
                    
            </div>
            <div className='divider'></div>
            <div className='details'>
                    <h1>Contact Us</h1>
                    <ul>
                            <li className='li'>+97 1585896602 </li>
                            <li className='li'>sanmaxdxb@gmail.com</li>
                            <li className='li'>Sanoj Thankappan</li>  
                        </ul>
            </div>





        </div>


    </div>
  )
}

export default Description