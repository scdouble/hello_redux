
/**
 * CountコンポーネントのActionを生成する
 */

// const createIncrementAction = (data) => {
//     return { type: 'increment', data }
// }

import { INCREMENT, DECREMENT } from "./constant"
// 簡潔に書く方法　、注意：右側のオブジェクトは()で括る必要がある。
// export const createIncrementAction = data => { type: INCREMENT, data }　==> NG

export const createIncrementAction = data => ({ type: INCREMENT, data })

// const createDecrementAction = (data) => {
//     return { type: 'decrement', data }
// }

export const createDecrementAction = data => ({ type: DECREMENT, data })
