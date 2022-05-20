import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";

// 객체가 들어간다
export default combineReducers({
    movie:MovieReducer,
    
});