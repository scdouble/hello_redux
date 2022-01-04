
/**
 * CountコンポーネントのActionを生成する
 */

import { INCREMENT, DECREMENT } from "../constant"

// 同期型Action=アクションの値がObject
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
// 非同期Action=アクションの値がFunction。一般的に非同期型Actionの中では同期型Actionが呼び出される。
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time)
  }
}
