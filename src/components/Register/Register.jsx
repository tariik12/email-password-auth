import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {
    const [error, setError] =useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) =>{
        //1. prevent page refresh
        event.preventDefault();
        setSuccess('')
        setError('')
        // 2. collect form data
       const email = event.target.email.value;
       const password = event.target.password.value;
       //validate
       if(!/(?=.*[A-Z])/.test(password)){
        setError('Please add at least one upperCase');
        return;
       }
       else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setError('Please add at least two numbers')
        return;
       }
       else if(password.length <6){
        setError('Please add 6 characters in your password')
        return
       }
        //3. create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            event.target.reset()
            setSuccess('user has create successfully')
        })
        .catch(error =>{
            console.error(error.message)
            setError(error.message)

        })
    }
    const handleEmailChange =(event) =>{
        // console.log(event.target.value)
        // setEmail(event.target.value)
    }
    const handlePasswordBluer =(event) =>{
        // console.log(event.target.value)
    }
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h3>Please Register</h3>
                <input className='w-50 rounded mb-4' onChange={handleEmailChange} type="email" placeholder='Please Your Email' name='email' id='email' required />
                <br />
                <input className='w-50 rounded mb-4 ' onBlur={handlePasswordBluer} type="password" placeholder='Please Your password' name='password' id='password' required />
                <br />
                <input className='btn btn-primary' type="submit" value='Register' />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;