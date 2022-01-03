import React, { Component } from 'react'
// storeの中のStateを取得するためにStoreを導入
import store from '../../redux/store'

export default class Count extends Component {
    //reducerで管理することになったので、不要
    // state = {
    //     count: 0
    // }

    // Countコンポーネント独自のStateは引き続き使える
    state = { carName: "Bentz" }

    // componentDidMount() {
    //     // reduxの中のStateの状態を監視、変更があったら、renderを実行
    //     store.subscribe(() => { // reduxの中の任意のstateに変更があったら、このCallbackは実行される
    //         // lifecycle　hookの中のthisはコンポーネントのInstance Object
    //         this.setState({})
    //     })
    // }
    increment = (params) => {
        // console.log(this);
        const { value } = this.selectNumber
        store.dispatch({ type: "increment", data: value * 1 })
    }
    decrement = (params) => {
        const { value } = this.selectNumber
        store.dispatch({ type: "decrement", data: value * 1 })

    }
    //現在の合計値が奇数時に足す
    incrementIfOdd = (params) => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({ type: "increment", data: value * 1 })

        }
    }
    incrementAsync = (params) => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({ type: "increment", data: value * 1 })

        }, 500)

    }

    render() {
        //  console.log("render this", this);

        return (
            <div>
                <h1>Current Sum Count: {store.getState()}</h1>
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
