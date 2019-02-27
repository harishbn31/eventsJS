import React, {Component} from "react";
import './Person.css'
class Person extends Component {
    render(){
        return (
            <div className="Person" >
                <p onClick={this.props.click}>I am Person {this.props.name} age {this.props.age}</p>
                <span>{this.props.children}</span>
                <input type="text"/>
            </div>
        )
    }
}
// const person = (props) => {
//         return(
//             <div className="Person" >
//                 <p onClick={props.click}>I am Person {props.name} age {props.age}</p>
//                 <span>{props.children}</span>
//                 <input type="text"/>
//             </div>
//         ) 
// }
export default Person