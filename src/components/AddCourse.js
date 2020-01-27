import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

export class AddCourse extends Component {
    render() {
        return (
            <div>
            <Form>
  <Form.Group controlId="formGridCourseName">
    <Form.Label>Course Name</Form.Label>
    <Form.Control placeholder="Course Name" />
  </Form.Group>

  <Form.Group controlId="formGridDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="Tell us more about the course" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control placeholder="$"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCategory">
      <Form.Label>Category</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>UI/UX</option>
        <option>Web Development</option>
        <option>Python</option>
        <option>AI</option>
        <option>Blockchain Technology</option>
        <option>Cloud Computing</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        )
    }
}

export default AddCourse