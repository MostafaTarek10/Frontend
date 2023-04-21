import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import "../../Style/Login.css"
const Login = () => {
  return <div className="login-container">

        <h1>Login Form</h1>
        <Alert variant={"danger"} >
            This is a alert—check it out!
        </Alert>
        <Alert variant={"success"} >
            This is a alert—check it out!
        </Alert>

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="ematil" placeholder="Please Enter Your Email" />
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
