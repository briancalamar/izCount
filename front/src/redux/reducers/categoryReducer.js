import { GET_CATEGORIES } from "../actions/actionNames";

const initialState = {
    categories: null,
}

export default function categoryReducer (state = initialState, action) {
    switch (action.name) {
        case GET_CATEGORIES: return { ...state, sizes: action.payload }

        default: return state;
    }
}