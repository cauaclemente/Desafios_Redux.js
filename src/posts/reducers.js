import { combineReducers } from "redux"

export const postReducer = (state = [], action ) => {
    switch (action.type) { 
        case "GET_POSTS":
            return action.payload; // vai entregar os dados do GET POSTS
        default:
            return state //retornara um arraay vazio
    }
}

export const rootReducer = combineReducers({
posts:postReducer
})