import { ActionType } from "../action-types"

export const toggleDarkMode = () => {
    return {
        type : ActionType.TOGGLE_DARK_MODE
    }
}