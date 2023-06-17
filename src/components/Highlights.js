import React from 'react'
import './Highlights.css'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';


const Highlights = () => {
    return (
        <div className='highlight'>
            <div className='titlehigh'>
               <p> Why Choose Us</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <PeopleAltRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Expirience Skill</h6>
                    <p className='carddesc'>With years of expertise and skill in the automotive industry,
                    our team at Karcrazy Garage brings unrivaled experience to every service we provide. </p>
                </div>
                <div className='card'>
                    <PhoneEnabledRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Guaranteed Service</h6>
                    <p className='carddesc'>At our Mercado, we stand behind our work with a guarantee,
                     ensuring that you receive top-notch service and satisfaction for all your vehicle needs. </p>
                </div>
                <div className='card'>
                    <GppGoodRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Trusted Work</h6>
                    <p className='carddesc'>Our commitment to delivering trusted workmanship is at the core of our values. 
                    You can rely on sanmax Garage for reliable and dependable service you can trust.</p>
                </div>
                <div className='card'>
                    <BusinessCenterRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Expert Engineers</h6>
                    <p className='carddesc'>Our team of highly skilled and experienced engineers are dedicated to delivering automotive repair and maintenance. </p>
                </div>
                
            </div>
            
        
        </div>
    )
}

export default Highlights
