import { GET_SIZES } from "../actions/actionNames";

const initialState = {
    sizes: null,
}

export default function sizeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SIZES: return { ...state, sizes: action.payload }

        default: return state;
    }
}