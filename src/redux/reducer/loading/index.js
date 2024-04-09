import { ActionType } from "../../action/action-types"

const initialState = {
    isLoading : true,
}

export const loadingReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionType.SET_LOADING_STATUS:
        return {
            ...state,isLoading : action.payload
        }

        default : 
        return state;
    }
}