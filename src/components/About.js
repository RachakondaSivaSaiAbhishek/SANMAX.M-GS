import React from 'react'
import './About.css'
import Header from './Header'
import aboutimg from '../assets/images/garage.jpg'



const About = () => {
  return (
    <div className='about'>
        <div className='aboutbanner'>
            <Header/>
            <h3 className='bannertitle'> About <span className='spancolor' >Us</span></h3><br/><br/><br/>
            <p className='bannerdesc'>Delivering a top notch quality services to our customers
            is our priority</p>

        </div>
        <div className='aboutdetails'>

            <div className='detailstitle'>
                <h3>Who We Are</h3>
            </div>
        </div>
        <div className='customer'>
            <h3>Reviews</h3>
            <div className='customerblock'>

                <p>" porro quisquam est, qui dolore ipsum quia dolor sit amet,
                 consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt." </p>
                <h3>Reinhardy Omondi</h3>
            </div>
            <div className='customerblock'>

                <p>" porro quisquam est, qui dolore ipsum quia dolor sit amet,
                 consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt." </p>
                <h3>Reinhardy Omondi</h3>
            </div>
            <div className='customerblock'>

                <p>" porro quisquam est, qui dolore ipsum quia dolor sit amet,
                 consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt." </p>
                <h3>Reinhardy Omondi</h3>
            </div>
            

        </div>


    </div>
  )
}

export default About