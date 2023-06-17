export default function validateInfo(inputs){
    let errors = {}

    if(!inputs.username.trim()){
        errors.username="Username is Required"
    }
    if(!inputs.email){
        errors.email="Email Required"
    }
       else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)){
           errors.email= "Email address is invalid"
       }

    if(!inputs.message.trim()){
        errors.message="Enter Your Message"
    }

    return errors;





}