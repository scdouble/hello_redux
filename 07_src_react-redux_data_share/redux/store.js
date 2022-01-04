// このファイルはstoreのオブジェクトをExposeする。App全体で1つのstoreを使う

// Reduxのコアメンバーのstoreを作成するcreateStoreメソッドをインポート
import { createStore,applyMiddleware, combineReducers } from 'redux'
// countコンポーネントのReducerをインポート
import countReducer from './reducers/count' // countReducerをexport default默认暴露
// import {} from  //这样写就是分别暴露或者统一暴露
import personReducer from './reducers/person'
// storeで非同期処理をするためredux-thunkを導入
import thunk from 'redux-thunk'

// reducerを集結
// combineReducers({})传入的那个对象就是redux帮我们保存的总状态对象
const allReducer = combineReducers({
  he: countReducer, //heは統合したStateの名前
  rens:personReducer
})
// StoreをExpose
export default createStore(allReducer, applyMiddleware(thunk))
