/**
 * このファイルは全てのReducerを結合する
 */
import { combineReducers } from 'redux'

// CountコンポーネントのReducerをImportする
import count from './count'
// PersonコンポーネントのReducerをImportする
import persons from './person'

export default combineReducers({
  count, //countは統合したStateの中の項目の名前
  persons
})
