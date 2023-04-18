import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import "../../Style/Login.css"
const Login = () => {
  return <div>
      <Form className="login-container">
        <h1>Login Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Enter Your Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  </div>;
};

export default Login;
