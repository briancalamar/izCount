import { GET_CATEGORIES } from "../actions/actionNames";

const initialState = {
    categories: null,
}

export default function categoryReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES: return { ...state, categories: action.payload }

        default: return state;
    }
}