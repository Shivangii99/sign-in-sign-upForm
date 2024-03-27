import React, { useState, useEffect } from 'react'
import './SignUpForm.css';

export const SignUpForm = () => {


    const [action, setAction] = useState("sign-in");
    const initials = { UserName: '', email: '', password: '' };
    const [values, setValues] = useState(initials);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        // console.log(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(values));
        setIsSubmit(true);

    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(values);
        }
    }, [formErrors]);

    const validate = (errValues) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if (!errValues.UserName) {
            errors.UserName = 'Please enter Username';
        }
        if (!errValues.email) {
            errors.email = "please enter your email id";
        }
        else if (!regex.test(errValues.email)) {
            errors.email = "please enter VALID email id"
        }
        var passw = /^(?=.*[a-z$])(?=.*[A-Z]).{6,20}$/;
        if (!errValues.password) {
            errors.password = "please enter password"
        }
        else if (!errValues.password.match(passw)) {
            errors.password = "Please enter valid password (it must contain atleast one lower, upper case char and numeric. the length should be form 6 to 20 chars)"
        }

        return errors;;
    }

    const toggleFunc = () => {
        var x = document.getElementById("my-password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const handleSignUp = () =>{
        if(action === "sign-up"){
            setFormErrors(validate(values));
        }
    }
    return (
        <div className='parent'>
            {Object.keys(formErrors).length === 0 && isSubmit && action === "sign-in" ? (<div className='success'>Signed In Successfully</div>) : (<div></div>)}
            <div className='container'>
                <form className='head-form' onSubmit={handleSubmit}>
                    {action === 'sign-in' ? (<div><input className='input-1' type='text' placeholder='Username' name='UserName' value={values.UserName} onChange={handleChange}></input>
                        <p className='paragraph'>{formErrors.UserName}</p></div>) : (<div></div>)}

                    <input type='email' placeholder='Email' name='email' value={values.email} onChange={handleChange}></input>
                    <p className='paragraph'>{formErrors.email}</p>

                    <div className='pass-container'>
                        <input type='password' placeholder='Password' name='password' id='my-password' value={values.password} onChange={handleChange}></input>
                        <div className='check-container'>
                          <input id='check-box' type="checkbox" onClick={toggleFunc}></input>
                          <p>Show Password</p>
                        </div>
                    </div>
                    <p className='paragraph'>{formErrors.password}</p>

                    <div className='btn'>
                        <button type='submit' onClick={() => { setAction("sign-in") }} className={action === "sign-in" ? "coloured" : "uncoloured"}>Sign-in</button>
                        <button type='button' onClick={() => { handleSignUp(); setAction("sign-up");}} className={action === "sign-up" ? "coloured" : "uncoloured"}>Sign-up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}