import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk"
import rootReducer from './reducers/index'  // index 안줘도 됨 (기본 파일임)
import { composeWithDevTools } from 'redux-devtools-extension';


let store =  createStore(
    rootReducer,
    composeWithDevTools(
        //  비동기 
        applyMiddleware(thunk)
    ));

export default store;