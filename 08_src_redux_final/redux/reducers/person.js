import { ADD_PERSON } from "../constant";

// Stateを初期化
const initState = [{ id: '001', name: 'tom', age: 18 }]

// reducerはstateを初期化することとStateを加工することをやる
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
