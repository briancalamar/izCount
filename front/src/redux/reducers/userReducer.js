import { GET_USERS, GET_USER_BY_ID } from "../actions/actionNames";

const initialState = {
    users: null,
    userDetail: null,
}

export default function userReducer(state = initialState, action){
    switch (action.name) {
        case GET_USERS: return { ...state, users: action.payload }

        case GET_USER_BY_ID: return { ...state, userDetail: action.payload }

        default: return state;
    }
}