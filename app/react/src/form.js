
  import React, { Component } from 'react';
  import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
  import './App.css';
  
  class FormComp extends Component {
    render() {
      return (
        <Container className="">
        <Row>
            <Col>
          <h2>Sign In</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button color="primary" onClick={() => console.log('form submitted')}>Submit</Button>
          </Form>
          </Col>
          <Col></Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default FormComp;