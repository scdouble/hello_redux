// このファイルはstoreのオブジェクトをExposeする。App全体で1つのstoreを使う

// Reduxのコアメンバーのstoreを作成するcreateStoreメソッドをインポート
import { createStore,applyMiddleware } from 'redux'
// countコンポーネントのReducerをインポート
import countReducer from './count_reducer' // countReducerをexport default默认暴露
// import {} from  //这样写就是分别暴露或者统一暴露

// storeで非同期処理をするためredux-thunkを導入
import thunk from 'redux-thunk'

// StoreをExpose
export default createStore(countReducer, applyMiddleware(thunk))
