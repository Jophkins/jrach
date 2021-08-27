import {combineReducers, createStore} from "redux";
import thinReducer from "./thinReducer";


let reducers = combineReducers({
    thinDiet: thinReducer
});

let store = createStore(reducers);

window.store = store;

export default store;