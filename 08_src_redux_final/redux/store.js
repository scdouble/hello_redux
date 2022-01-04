// このファイルはstoreのオブジェクトをExposeする。App全体で1つのstoreを使う

// Reduxのコアメンバーのstoreを作成するcreateStoreメソッドをインポート
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'

// storeで非同期処理をするためredux-thunkを導入
import thunk from 'redux-thunk'
// redux-devtoolsを使えるようにするため、redux-devtools-extensionを導入
import { composeWithDevTools } from 'redux-devtools-extension'

// StoreをExpose
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
