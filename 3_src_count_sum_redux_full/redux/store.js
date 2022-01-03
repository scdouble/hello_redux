// このファイルはstoreのオブジェクトをExposeする。App全体で1つのstoreを使う

// Reduxのコアメンバーのstoreを作成するcreateStoreメソッドをインポート
import { createStore } from 'redux'
// countコンポーネントのReducerをインポート
import countReducer from './count_reducer' // countReducerをexport default默认暴露
// import {} from  //这样写就是分别暴露或者统一暴露

// StoreをExpose
export default createStore(countReducer)
