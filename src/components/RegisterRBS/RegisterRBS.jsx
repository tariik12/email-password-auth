import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterRBS = () => {
    const handleRegister = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        console.log(email, password)
    }
    return (
        <div className='w-50 mx-auto border' >
            <Form onSubmit={handleRegister}>
                <Form.Label className='text-primary'>Email address !!!</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default RegisterRBS;