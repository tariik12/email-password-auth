import { getAuth,sendPasswordResetEmail,signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

 const auth = getAuth(app)
const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef(); 
    const submitHandler=(event) =>{

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
        setSuccess('')
        //validation
        if(!/(?=.*[a-zA-Z])/.test(password)){
            setError('Please add UpperCase Latter & LowerCase')
            return;
        }
        else if(!/(?=.*[!#$%&? "])/.test(password)){
            setError('please add special characters')
            return;
        }
        else if(password.length <6){
            setError('please add 6 characters')
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('User login successful.');
            setError('');
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }
    const handleResetPassword =() =>{
        const email = (emailRef.current.value);
        if(!email){
            alert('Please provide your emil address to reset password')
        }
        sendPasswordResetEmail(auth,email)
        .then(() =>{
            alert('Please check your email')
            return;
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Login Page</h1>
            <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input type="email" className="form-control" ref={emailRef} id="emailInput" name='email' aria-describedby="emailHelp" placeholder="Enter email" required/>
       
      </div>
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" name='password' id="passwordInput" placeholder="Password" required />
        <button className='btn btn-primary'>password show</button>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
        <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <p><small>Forget Password? Please<button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
    <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
    <p>{error}</p>
    <p>{success}</p>
        </div>
    );
};

export default Login;