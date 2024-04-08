import { combineReducers } from "redux";
import { movieReducer } from "./movie";
import darkModeReducer from "./darkMode";

const reducers = combineReducers({
    movie : movieReducer,
    darkMode : darkModeReducer
})

export default reducers;