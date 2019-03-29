import React, { Component } from 'react';
import Person from "./Person/person"
import './App.css';
export default class Home extends Component {
    state = {
      persons: [
        {name: "person1", age: 21},
        {name: "person2", age: 22},
        {name: "person3", age: 24},
        {name: "person 4", age: 4}
      ],
      otherstate: "some other name",
      showDiv: false
    }
    buttonHandler = (newName) => {
      this.setState({
        persons:[ {name: newName, age: 21},
        {name: "potte", age: 18},
        {name: "max", age: 24},
        {name: "person 4", age: 44}
  
      ],
      otherstate: "Yes changed"
      }
      )
      // this.setState(prevState => ({
      //   check: !prevState.check
      // }));
    }
    onChangeHandler = (event) => {
      this.setState({
        persons:[ 
        {name: 'person1', age: 21},
        {name: event.taget.value, age: 18},
        {name: "person3", age: 25},
        {name: "person 4", age: 40}
      ],
      otherstate: "Yes on changed"
      }
      )
    }
    toggleChange = () => {
      const does = this.state.showDiv
      this.setState({showDiv: !does})
    }
    delete = (person,index) => {
      // const persons = this.state.persons
      // const persons = this.state.persons.slice()
      // persons.splice(index,1)
      const persons = [...this.state.persons]
      persons.splice(index,1)
      this.setState({persons: persons})
    }
    render() {
        const style = {
          backgroundColor: 'yellow'
    
        }
        let persons = null;
        if(this.state.showDiv){
          persons = (
            <div className="to-show">
              <h3>Hello new div</h3>
            </div>
          )
          style.backgroundColor = 'green';
        }
        let classes = [];
        if(this.state.persons.length <=2){
          classes.push('red');
        }
        if(this.state.persons.length <= 3){
          classes.push('bold');
        }
            return (
              <div>
                <h2 className={classes.join(' ')}>Welcome to React basics</h2>
                <button  onClick={(evn) => this.buttonHandler("hello")}>Switch Name</button>
                {this.state.persons.map((person,index) => (
                    <Person key={index}  click={() => this.delete(person,index)} name={person.name} age={person.age}/>
                  )
                )}
                <button style={style} onClick={this.toggleChange.bind(this)}>toggle Change</button> 
               {persons}
              </div>
            )
      }
    }