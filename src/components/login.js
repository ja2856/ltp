import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";

export default class Login extends Component {
 
  render() {
    const { value, handleChange, handleLogin, isLoggedin } = this.props;
    if (isLoggedin) {
      
      return <Redirect to="/categories" />;
    }
    return (
      <div>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      {/* <input value={value} type="text" id="input" onChange={handleChange} /> */}
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit" onClick={handleLogin}>
    Submit
  </Button>
</Form>
        {/* <input value={value} type="text" id="input" onChange={handleChange} />
        <button onClick={handleLogin}>login</button> */}
      </div>
    );
  }
}