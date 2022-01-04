/*
    このファイルはCountコンポーネントのReducerを作成するためにある。Reducerの本質はFunction
    ReducerのFunctionは二つのパラメータを受け取る。以前のStateと動作の対象を受け取る
*/
import { INCREMENT, DECREMENT } from '../constant';

const initState = 0
export default function countReducer(preState = initState, action) { //パラメータのデフォルト値で　Stateを初期化
  // if (preState == undefined) {
  //     preState = 0;
  // }

  // console.log(preState, action)

  // actionからtype, dataを取得
  const { type, data } = action;
  // typeによって　データの加工の方法を決める
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
