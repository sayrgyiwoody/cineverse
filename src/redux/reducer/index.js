import { combineReducers } from "redux";
import { movieReducer } from "./movie";
import darkModeReducer from "./darkMode";
import { loadingReducer } from "./loading";

const reducers = combineReducers({
    movie : movieReducer,
    darkMode : darkModeReducer,
    loading : loadingReducer,
})

export default reducers;