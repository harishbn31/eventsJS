import React from 'react'
import axios from 'axios'
import Table from './table'
import EventFormComp from './eventForm'
export default class Event extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }

    }
    componentDidMount() {
        axios.get(`/events`)
          .then(res => {
            const list = res.data;
            // console.log(res.data);
            this.setState({ list });
          }).catch(err => console.log(err))
      }
    handleData=(data)=>{
        this.setState( (prevState)=>{
            return {
                list:[data,...prevState.list]
            }
        })
    }
    deleteFunction = (e) => {
        // console.log(e.target.id)
        axios.delete(`events/${e.target.id}`).then(res => {
            console.log(res.data)
            this.setState((prevState) => {
                return {
                    list: prevState.list.filter( event => {
                        return event._id !== res.data.event._id;
                    })
                }
            })
        })

    }
    render(){
        return(
            <div>
                <Table  data = {this.state.list} deleteFunc={this.deleteFunction}/>
            <EventFormComp  handleData={this.handleData}/>
             
            </div>
        )
    }
}