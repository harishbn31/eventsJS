import React from "react";
import Example from "./navBar";
import Person from "./Person/person"
import './App.css'
// class BasicExample extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       buttons: []
//     }
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={() => {
//           this.setState(prevState => ({
//             buttons: prevState.buttons.concat(1)
//           }))
//         }}> 1 </button> 
//        <button onClick={() => {
//           this.setState(prevState => ({
//             buttons: prevState.buttons.concat(2)
//           }))
//         }}> 2 </button> 

//         { this.state.buttons.map((button,i) => <li key={i}> {button} </li> )}
//       </div>
//     )
//   }
// }

class BasicExample extends React.Component {
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
  render() {
    const style = {
      backgroundColor: 'yellow'

    }
        return (
          // <Example />
          <div>
            <h2>Welcome to React basics</h2>
            <button  onClick={(evn) => this.buttonHandler("hello")}>Switch Name</button>
            {this.state.persons.map(person => (
                <Person key={person.name}  click={this.buttonHandler.bind(this,"harish")} name={person.name} age={person.age}/>
              )
            )}
            <button onClick={this.toggleChange.bind(this)}>toggle Change</button> 
            {this.state.showDiv === true ? <div className="to-show">
              <h3>Hello new div</h3>
            </div> : null
            }
          
          </div>
        )
  }
}

export default BasicExample;
