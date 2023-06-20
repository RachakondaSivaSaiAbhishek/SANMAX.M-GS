import React from 'react'
import './About.css'
import Header from './Header'
import aboutimg from '../assets/images/garage.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='aboutbanner'>
            <Header/><br/>
            <h3 className='bannertitle'> About <span className='spancolor' >Us</span></h3>
            <br/><br/><br/><br/><br/><br/>
            <p className='bannerdesc'>Experience unparalleled automotive care with our exceptional garage services, where our skilled team meets your vehicle's needs with precision.</p>
        </div>
        <div className='description'>
        <div className='content'>
            <div className='titledesc'>
                <p className='p1'>Meet The Faces</p>
                <p className='p2'> Behind Our Team</p>
            </div>
            <div className='divid'></div>
            <div className='detail'>
                <p>Welcome to Sanmax Mercado, your trusted partner for all your garage servicing needs. With years of industry experience, we pride ourselves on delivering top-notch automotive services that keep your vehicles running smoothly and reliably. Our highly skilled technicians are equipped with the latest tools and technologies to handle a wide range of repairs, maintenance, and diagnostics.
                     From routine oil changes and tire rotations to complex engine repairs,
                     we have you covered. We prioritize customer satisfaction and strive to provide transparent and affordable services, ensuring you get the best value for your money. At Sanmax Mercado, we are committed to delivering excellence in every aspect of our work, so you can trust us with your automotive needs.</p>
        <p> 
        <ul>
        <li>Robotics: The company designs and manufactures robots for various applications such as industrial automation, medical assistance, and educational purposes.</li>
        <li> Artificial Intelligence: Robotics develops AI solutions that help businesses automate their operations, streamline workflows, and optimize decision-making processes.</li>
        <li>Machine Learning: The company provides machine learning services that enable businesses to leverage data analytics to gain insights and make informed decisions.</li></ul></p>
        <div className='divide'></div>
        <h3>Products:</h3>  
        <p>Robotics has a range of products that cater to various industries. Some of its most popular products include:</p>
        <p>
        <ul>
        <li>Robotic Arms: These are versatile robotic arms that can be used for a variety of tasks such as material handling, packaging, and assembly. </li>
        <li>Autonomous Mobile Robots: These are mobile robots that can navigate autonomously and perform tasks such as inventory management, security, and cleaning.</li>
        <li>AI-Powered Chatbots: These are chatbots that use artificial intelligence to provide customer support, answer queries, and offer personalized recommendations.</li>
        <li>Predictive Maintenance Software: This is a software solution that uses machine learning algorithms to predict equipment failure and prevent downtime.</li>
        </ul></p>
        <div className='divide'></div>
        <p>Company sales for Robotic & Automation with total super value of $17.3 billion sales config by 2030.
        Robotics is a leading technology company that specializes in developing cutting-edge solutions for Robotics, 
        Artificial Intelligence, and Machine Learning. The company is committed to providing its clients with innovative products and services that enhance productivity, efficiency, and profitability.
        Robotics offers a wide range of services that cater to the needs of various industries. These services include:
        </p>
            </div>
        </div>
        </div>
        <div className='customer'>
            <h3>Reviews</h3>
            <div className='customerblock'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit......."</p>
                <h3>Reinhardy Omondi</h3>
            </div>
            <div className='customerblock'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elitAliquam a enim id quam varius tempor. Sed euismod augue nec sem tincidunt. Sed eget fermentum lorem, at congue quam. Aliquam a enim id quam varius tempor"</p>
                <h3>Reinhardy Omondi</h3>
            </div>
            <div className='customerblock'>
                <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit. Sed euismod augue nec sem tincidunt. Sed eget fermentum lorem, at congue quam. Aliquam a enim id quam varius tempor."</p>
                <h3>Reinhardy Omondi</h3>
            </div>
        </div>
        
    </div>
  )
}

export default About
