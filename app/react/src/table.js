import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
  state = {
    events: []
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/events`)
      .then(res => {
        const events = res.data;
        this.setState({ events });
      }).catch(err => console.log(err))
  }

  render() {
    return (
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Created on</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
        {this.state.events.map((event, index) => 
          <tr key={index}>
            <td >{index+1}</td>
            <td >{event.name}</td>
            <td >{event.description}</td>
            <td >{event.eventDate[0].startDate}</td>
            <td >{event.createdAt}</td>
            <td>
              <Button id={event._id}  size="sm" color="info">Update</Button>{' '}
              <Button id={event._id} size="sm" color="danger">Delete</Button>
            </td>
          </tr>
        )}
          
        </tbody>
      </Table>      
    )
  }
}