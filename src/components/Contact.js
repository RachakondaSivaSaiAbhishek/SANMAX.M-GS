import React, { useState } from 'react'
import Header from './Header'
import './Contact.css'
import validate from './Validateinfo';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [inputs,setInputs] =useState({});
  const [errors ,setErrors] = useState({});


  const update = (e) =>{
    const {name,value} = e.target
    setInputs(values => ({...values ,[name] :value}))
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    setErrors(validate(inputs)); 
    emailjs.send('service_v5nnkil', 'template_tz08o4y', inputs, 'user_shBuEIKIoQO2r4QkhIuPZ');
    setInputs({
      username:'',
      email:'',
      message:''

    });

    
  }
  
  return (
    <div className='contact'>
      <div className='contactbanner'>
            <Header/>
            <h3 className='bannertitle'> Contact  <span className='spancolor' >Us</span></h3>

        </div>
        <div className='contactform'>
          <div className='contactdetails'>
            <h3> Contact</h3>
            <div className='socialtext'>
              <h3>Phone</h3>
              <p>+971 58 589 6602</p>
              <h3>Address</h3>
              <p> Sanmax Mercado </p>
              <p>Registered Head Quarters Queensbay Kochi, India</p>
              <p>Email: sanmax@gmail.com</p>
              <div className='socialscontact'>
                <h3>Follow Us</h3>
                <a href='' placeholder=''>
                    <FacebookRoundedIcon color="primary" fontSize='large'/>
                 </a>
                 <a href='https://www.instagram.com/sanojkt/' placeholder=''>
                    <InstagramIcon color="secondary" fontSize='large'/>
                 </a>
                 <a href='' placeholder=''>
                    <TwitterIcon color="primary" fontSize='large'/>
                 </a>
            </div>


            </div>
          </div>
          <div className="formarea" style={{ marginTop: "2rem" }}>
          <h3>Message Us</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="username">
              Name
            </label>
            <input
              id="username"
              className="forminput"
              type="text"
              name="username"
              value={inputs.username}
              placeholder="Enter Your Name"
              onChange={update}
            />
            {errors.username && <p className="errormssg">{errors.username}</p>}
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="forminput"
              type="text"
              name="email"
              value={inputs.email}
              placeholder="Enter Your Email"
              onChange={update}
            />
            {errors.email && <p className="errormssg">{errors.email}</p>}
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              className="textinput"
              id="message"
              required
              name="message"
              placeholder="Message"
              value={inputs.message}
              onChange={update}
            />
            {errors.message && <p className="errormssg">{errors.message}</p>}
            <button className="contactbtn" type="submit">
              Send
            </button>
          </form>
        </div>



        </div>

    </div>
  )
}

export default Contact