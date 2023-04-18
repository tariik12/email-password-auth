import React from 'react';

const Login = () => {
    const submitHandler=() =>{
        
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Login Page</h1>
            <form>
      <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input type="email" className="form-control" id="emailInput" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
       
      </div>
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" name='password' id="passwordInput" placeholder="Password" />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
        <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </div>
    );
};

export default Login;