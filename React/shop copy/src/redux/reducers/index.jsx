import { combineReducers } from "redux";
import authenticateReducer from './authenticateReducer'
import productReducer from "./productReducer";


export default combineReducers ({
    // 어떤 스테이트를 읽어올지 설명해야한다.
    auth : authenticateReducer,
    product : productReducer,
});