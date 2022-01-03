import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* コンテナコンポーネントをレンダリング。ついでにreduxのstoreを送る */}
                {/* <Count store={store} /> */}
                <Count />
            </div>
        )
    }
}
