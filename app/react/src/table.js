import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import moment from 'moment';

export default class EventsTable  extends Component {
  constructor(props){
    super(props)
      this.state ={
        events: []
    }
  }

  render() {
    return (
      <div>
        
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Created on</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
        {this.props.data.map((event, index) => 
          <tr key={index}>
            <td >{index+1}</td>
            <td >{event.name}</td>
            <td >{event.description}</td>
            <td >{moment(event.eventDate.startDate).format('MMMM Do YYYY')}</td>
            <td >{moment(event.eventDate.endDate).format('MMMM Do YYYY')}</td>
            <td >{moment(event.createdAt).format('MMMM Do YYYY')}</td>
            <td>
              <Button id={event._id}  size="sm" color="info">Update</Button>{' '}
              <Button id={event._id} size="sm" color="danger" onClick={this.props.deleteFunc}>Delete</Button>
            </td>
          </tr>
        )}
          
        </tbody>
      </Table>
      </div>
    )
  }
}