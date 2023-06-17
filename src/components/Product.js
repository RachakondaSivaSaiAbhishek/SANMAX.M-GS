import React from 'react'
import './Product.css'
import topImage from '../assets/images/background.jpg'

const Product = () => {
    return (
        <div className='cardContainer'>
            <div className='card'>
                <img src={ topImage} alt='' />
                <p className='cardTitle'>Card One</p>
                <div className='cardDetails'>
                   <p className='cardDescription'>This text is styled with some of the text formatting 
                   properties. The heading uses the 
                   text-align, text-transform, and color properties. The paragraph is
                   </p>
                   <p className='cardNumber'>24</p>
                </div>   
            </div>
            <div className='card'>
                <img src={ topImage} alt='' />
                <p className='cardTitle'>Card One</p>
                <div className='cardDetails'>
                   <p className='cardDescription'>This  is styled with some of the text formatting 
                   properties. The heading uses the 
                   text-align, text-transform, and color properties. The paragraph is
                   </p>
                   <p className='cardNumber'>24</p>
                </div>   
            </div>
            <div className='card'>
                <img src={ topImage} alt='' />
                <p className='cardTitle'>Card One</p>
                <div className='cardDetails'>
                   <p className='cardDescription'>This text is styled with some of the text formatting 
                   properties. The heading uses the 
                   text-align, text-transform, and color properties. The paragraph is
                   </p>
                   <p className='cardNumber'>24</p>
                </div>   
            </div>
            

        </div>
    )
}

export default Product
