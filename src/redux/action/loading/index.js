import { ActionType } from "../action-types"

export const setLoadingStatus = (status) => {
    return {
        type : ActionType.SET_LOADING_STATUS,
        payload : status,
    }
}