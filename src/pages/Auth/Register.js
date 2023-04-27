import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';  
const Register = () => {
  return <div>
    <Form className="login-container">
        <h1>Registration Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Please Enter Your Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Your Email" required />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Please Enter your Gender" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Health issues</Form.Label>
        <Form.Control type="text" placeholder="Please Enter if you have health issues like diabetes or HBP" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Enter Your Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  </div>;
};

export default Register;
