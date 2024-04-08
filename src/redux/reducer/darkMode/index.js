import { ActionType } from "../../action/action-types";

const initialState = {
    isDarkMode : false
};

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.TOGGLE_DARK_MODE:
        return {
            ...state,isDarkMode : !state.isDarkMode
        }

        default: 
        return state;
    }
}

export default darkModeReducer