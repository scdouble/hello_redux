import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count: 0
    }

    increment = (params) => {
        console.log(this);
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count + value * 1 })
    }
    decrement = (params) => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count - value * 1 })

    }
    //現在の合計地が奇数時に足す
    incrementIfOdd = (params) => {
        const { value } = this.selectNumber
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })

        }
    }
    incrementAsync = (params) => {
        const { value } = this.selectNumber
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })

        }, 500)

    }

    render() {
        console.log("render this", this);

        return (
            <div>
                <h1>Current Sum Count: {this.state.count}</h1>
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
