
  import React, { Component } from 'react';
  import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
import axios from 'axios';
  import './App.css';
  
  export default class EventFormComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            description:'',
            startDate: '',
            result:[]
        }
    }
    // this.nameChange = this.nameChange.bind(this);
    
    nameChange = (event) => {
        this.setState({name: event.target.value});
    }
    desChange = (event) => {
        this.setState({description: event.target.value});
    }
    dateChange = (event) => {
        this.setState({startDate: event.target.value});
    }
   submitForm = (event) => {
       event.preventDefault();
    console.log(this.state.startDate);
   }
    render(){
        return(
            <div>
            <Container className="">
            <Row>
                <Col>
            <h2>Create Event</h2>
                <Form className="form">
                    <Col>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" onChange={this.nameChange} value={this.state.name}/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="desc" onChange={this.desChange} value={this.state.description} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Date</Label>
                        <Input type="date"  onChange={this.dateChange} value={this.state.startDate} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                    <Button color="primary" type="submit" onClick={this.submitForm}>Create</Button>
                    </FormGroup>
                    </Col>
                </Form>
                </Col></Row></Container>
                
            </div>
        )
    }
}