
/**
 * CountコンポーネントのActionを生成する
 */

// function createIncrementAction(data){
//    return { type: 'increment', data }
// }

// const createIncrementAction = (data) => {
//     return { type: 'increment', data }
// }

// import store from "./store"
import { INCREMENT, DECREMENT } from "./constant"
// 簡潔に書く方法　、注意：右側のオブジェクトは()で括る必要がある。
// export const createIncrementAction = data => { type: INCREMENT, data }　==> NG

// 同期ActionはActionのReturnがObject
export const createIncrementAction = data => ({ type: INCREMENT, data })

// const createDecrementAction = (data) => {
//     return { type: 'decrement', data }
// }

export const createDecrementAction = data => ({ type: DECREMENT, data })


// 非同期ActionはActionのReturnがFunction 一般的に非同期Actionの中で同期Actionを呼ぶ。
// 非同期Actionは必ず使うものではない
export const createIncrementActionAsync = (data, time) => {
    // 下のreturnの後に書いている(dispatch)=>{....}はstoreが実行するもの
    // storeがsetTimeoutを実行するときにdispatchを引数に渡すので、Actionの中でStoreをImportしなくてもよい
    return (dispatch) => {
        // setTimeout(() => {
        //     // reduxに通知する
        //     // store.dispatch({ type: INCREMENT, data:data})
        //     store.dispatch(createIncrementAction(data))
        // }, time)

        setTimeout(() => {
            // reduxに通知する
            // dispatchの中で同期Actionを実行してactionオブジェクトを取得
            dispatch(createIncrementAction(data))

        }, time)
    }
}