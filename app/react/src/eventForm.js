
  import React, { Component } from 'react';
  import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
import axios from 'axios';
  export default class EventFormComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            description:'',
            startDate: '',
            endDate: '',
            result: []
        }
    }
    
    nameChange = (event) => {
        this.setState({name: event.target.value});
    }
    desChange = (event) => {
        this.setState({description: event.target.value});
    }
    startDateChange = (event) => {
        this.setState({startDate: event.target.value});
    }
    endDateChange = (event) => {
        this.setState({endDate: event.target.value});
    }
   submitForm = (event) => {
       event.preventDefault();
       let data = {
           name: this.state.name,
           description: this.state.description,
           eventDate: {
               startDate: this.state.startDate,
               endDate: this.state.endDate
           }

        }
       axios.post('/events',data).then(res=>{
        this.setState({
            result:res.data,
            name: '',
            description: '',
            startDate: '',
            endDate: ''
        })
        
        this.props.handleData(res.data.event)
    }).catch((err) => console.log(err))
   }
    render(){
        return(
            <div>
            <Container className="">
            <Row>
                <Col md="4">
                <h2>Create Event</h2>
                    <Form className="form">
                    <Col>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text"  name="name" onChange={this.nameChange} value={this.state.name}/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea"  name="desc" onChange={this.desChange} value={this.state.description} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Start Date</Label>
                        <Input type="datetime-local"  onChange={this.startDateChange} value={this.state.startDate} />
                    </FormGroup>
                    <FormGroup>
                        <Label>End Date</Label>
                        <Input type="datetime-local"  onChange={this.endDateChange} value={this.state.endDate} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                    <Button color="primary" type="submit" onClick={this.submitForm}>Create</Button>
                    </FormGroup>
                    </Col>
                </Form>
                </Col>
                <Col md="4">
                </Col>
                <Col md="4"></Col>
                </Row>
                </Container>
                
            </div>
        )
    }
}