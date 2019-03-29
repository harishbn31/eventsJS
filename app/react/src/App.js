import React from "react";
import Example from "./navBar";
import './App.css'
class BasicExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: []
    }
  }
  render() {
    return (
      // <div>
      //   <button onClick={() => {
      //     this.setState(prevState => ({
      //       buttons: prevState.buttons.concat(1)
      //     }))
      //   }}> 1 </button> 
      //  <button onClick={() => {
      //     this.setState(prevState => ({
      //       buttons: prevState.buttons.concat(2)
      //     }))
      //   }}> 2 </button> 

      //   { this.state.buttons.map((button,i) => <li key={i}> {button} </li> )}
      // </div>
      <div>
        <Example />
      </div>
    )
  }
}

export default BasicExample;
