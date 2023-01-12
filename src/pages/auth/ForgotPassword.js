import { useState } from "react";
import brandLogo from '../../assets/img/logo-dark.svg'
import { isValidEmail, resHandle } from '../../helper';


const ForgotPassword = () =>{
    const[email,setEmail] = useState("");
    const[emailErr,setEmailErr] = useState("");
    const validation = () => {


        let validate = true;
        if(email == ''){
            setEmailErr('Email is required');
            validate = false
        }
        // else if(!isValidEmail(email)){
        //     setEmailErr('Email is not valid');
        //     validate = false
        // }
        return validate
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validation()){

        }
    }

    return(
        <>
          <div className="auth_wrapper">
            <div className="auth_box">
                <form onSubmit={handleSubmit}>
                    <div className='text-center auth_text'>
                        <img src={brandLogo} />
                        <h2>Forgot Password</h2>
                        <p>No worries. We are happy to send you an email with a password reset link.</p>
                    </div>
                    
                    <div className="form-group">
                        <label>Email<b className="cm_extact">*</b></label>
                        <input
                            value={email}
                            required
                            onChange={e => (setEmail(e.target.value), setEmailErr(''))}
                            type="email"
                            className={`form-control ${emailErr ? 'is-invalid' : ''}`} />
                        {emailErr ? <div className="invalid-feedback">{emailErr}</div> : ''}
                    </div>

                 
  
                

                   

                    <button className='btn btn-primary w-100' type="submit">Submit</button>

                </form>
            </div>
        </div>
        </>
    )
}
export default ForgotPassword;