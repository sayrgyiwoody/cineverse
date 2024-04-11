import { ActionType } from "../action-types"

export const fetchMovies = (movies) => {
    return {
        type : ActionType.FETCH_MOVIES,
        payload : movies,
    }
}

export const selectMovie = (movie) => {
    return {
        type : ActionType.SELECT_MOVIE,
        payload : movie,
    }
}

export const removeSelectedMovie = (movie) => {
    return {
        type : ActionType.REMOVE_SELECTED_MOVIE,
        payload : movie,
    }
}


export const setCurrentPage = (page) => {
    return {
        type : ActionType.SET_CURRENT_PAGE,
        payload : page,
    }
}

export const setTotalPage = (page) => {
    return {
        type : ActionType.SET_TOTAL_PAGE,
        payload : page,
    }
}

export const setFilterData = (data) => {
    return {
        type : ActionType.SET_FILTER_DATA,
        payload : data,
    }
}
