import { GET_SIZES } from "../actions/actionNames";

const initialState = {
    sizes: null,
}

export default sizeReducer = (state = initialState, action) => {
    switch (action.name) {
        case GET_SIZES: return { ...state, sizes: action.payload }

        default: return state;
    }
}