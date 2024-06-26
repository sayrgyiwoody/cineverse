import { ActionType } from "../../action/action-types"

const initialState = {
    movies : [],
    movie : {},
    currentPage : 1,
    totalPage : 1,
    filterData : {
        genres : ',',
        sortBy : 'popularity.desc',
        startDate : '',
        endDate : '',   
    },
    totalMovies : 0,
    searchKey : '',
}

export const movieReducer = (state = initialState , action) => {
    switch (action.type){
        case ActionType.FETCH_MOVIES:
        return {
            ...state,movies : action.payload
        }
        
        case ActionType.SELECT_MOVIE:
        return {
            ...state,movie : action.payload
        }

        case ActionType.REMOVE_SELECTED_MOVIE:
        return {
            ...state,movie : action.payload
        }

        case ActionType.SET_CURRENT_PAGE:
        return {
            ...state,currentPage : action.payload
        }

        case ActionType.SET_TOTAL_PAGE:
        return {
            ...state,totalPage : action.payload
        }

        case ActionType.SET_FILTER_DATA:
        return {
            ...state,filterData : action.payload
        }

        case ActionType.SET_FILTER_DATA:
        return {
            ...state,filterData : action.payload
        }

        case ActionType.SET_TOTAL_MOVIES:
        return {
            ...state,totalMovies : action.payload
        }

        case ActionType.STORE_SEARCH_KEY:
        return {
            ...state,searchKey : action.payload
        }

        default : 
        return state;
    }
}