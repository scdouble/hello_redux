import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>
    , document.getElementById("root"))

// // redux中のstateの状態を監視、reduxのstateの状態の変化があったら、app全体を再度レンダリング
// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById("root"))

// })