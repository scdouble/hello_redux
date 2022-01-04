import React, { Component } from "react";
import { addPerson } from "../../redux/actions/person";
import { connect } from 'react-redux'
import { nanoid } from "nanoid";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value * 1;

    const personObj = { id: nanoid(), name, age }
    // console.log(personObj);
    this.props.addPerson(personObj)

    this.nameNode.value = ""
    this.ageNode.value = ""

  };
  render() {
    return (
      <div>
        <h3>Person Component, Count Component has {this.props.count} count</h3>
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
            this.props.persons.map((person) => {
              return <li key={person.id}>{person.name}----{person.age}</li>
            })
          }
        </ul>

      </div>
    );
  }
}

export default connect(
  state => ({
    persons: state.persons,
    count: state.count
  }),
  { addPerson }
)(Person)
