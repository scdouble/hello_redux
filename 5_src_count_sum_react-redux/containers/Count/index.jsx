// CountのUIコンポーネントを作成
import CountUI from "../../components/Count";
// ReduxのStoreをImport
// react-reduxを使うときはstoreは親のコンテナのコンポーネントからpropsでもらう必要がある
// import store from "../../redux/store"
// UIコンポーネントとreduxを繋ぐためにConnectをImport
import { connect } from 'react-redux'
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementActionAsync,
} from "../../redux/count_action";


/*
* mapStateToProps関数の返り値はObject。StateをUIコンポーネントに渡す
* 帰り値のObjectのkey項目はUIコンポーネントのpropsのkey, valueはUIコンポーネントのpropsの値になる
* react-reduxがa関数を実行するときはすでにstateを引数にとして受けれる
*/
function mapStateToProps(state) {
    return { count: state } //この書き方はJSXのタグで表すと<CountUI n={900}>に相当する
}

/*
* mapDispatchToProps関数の返り値は Stateを操作するための関数
* 帰り値のObjectのkey項目はUIコンポーネントのpropsのkey, valueはUIコンポーネントのpropsの値になる
* react-reduxがb関数を実行するときはすでにdispatchを引数にとして受けれる
*/
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            //console.log(data) 
            // reduxに足し算することを通知する
            dispatch(createIncrementAction(number))
        },
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementActionAsync(number, time))
    }
}


// connectを使ってCountのコンテナコンポーネントを作成してExposeする
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
// export default connect(a, b)(CountUI) 
