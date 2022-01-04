import React, { Component } from "react";
import { createAddPersonAction } from "../../redux/actions/person";
import  {connect} from 'react-redux'
import { nanoid } from "nanoid";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value * 1;

    const personObj = { id: nanoid(), name, age }
    // console.log(personObj);
    this.props.jiaYiRen(personObj)

    this.nameNode.value =""
    this.ageNode.value =""

  };
  render() {
    return (
      <div>
        <h3>Person Component, Count Component has {this.props.he} count</h3>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="Input name"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="Input age"
        />
        <button onClick={this.addPerson}>Add Person</button>
        <ul>
        {
          this.props.yiduiren.map((ren)=>{
            return <li key={ren.id}>{ren.name}----{ren.age}</li>
          })
        }
        </ul>

      </div>
    );
  }
}

export default connect(
  state =>({yiduiren:state.rens, he:state.he}),
  {jiaYiRen:createAddPersonAction}
)(Person)
