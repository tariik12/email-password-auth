import React, { useState } from 'react';


const Register = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.password.value)
    }
    const handleEmailChange =(event) =>{
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handlePasswordBluer =(event) =>{
        console.log(event.target.value)
    }
    
    return (
        <div onSubmit={handleSubmit}>
            <form>
                <h3>Please Register</h3>
                <input onChange={handleEmailChange} type="email" placeholder='Please Your Email' name='email' id='email' />
                <br />
                <input onBlur={handlePasswordBluer} type="password" placeholder='Please Your password' name='password' id='password' />
                <br />
                <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;