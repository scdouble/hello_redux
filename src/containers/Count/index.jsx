import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementActionAsync,
} from "../../redux/actions/count";


class Count extends Component {

  state = { carName: "Bentz" }

  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value * 1)

  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)

  }
  //現在の合計値が奇数時に足す
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }

  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)

  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Count Component, Person Component has {this.props.renshu} person</h3>
        <h4>Current Sum Count: {this.props.count}</h4>
        <select ref={c => this.selectNumber = c} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>plus if odd number</button>&nbsp;
        <button onClick={this.incrementAsync}>plus async</button>&nbsp;

      </div>
    )
  }
}


export default connect(
  state => ({ count: state.he, renshu: state.rens.length }),
  //mapDispatchToPropsの簡潔な書き方
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementActionAsync
  }
)(Count)
