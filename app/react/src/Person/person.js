import React from "react";
import './Person.css'
const person = (props) => {
        return(
            <div className="Person" >
                <p onClick={props.click}>I am Person {props.name} age {props.age}</p>
                <span>{props.children}</span>
                <input type="text"/>
            </div>
        ) 
}
export default person