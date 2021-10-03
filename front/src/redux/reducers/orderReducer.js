import {GET_ORDERS, GET_ORDER_BY_ID} from "../actions/actionNames";

const initialState = {
    orders: null,
    orderDetail: null,
}

export default function orderReducer(state = initialState, action){
    switch (action.name) {
        case GET_ORDERS: return { ...state, orders: action.payload }

        case GET_ORDER_BY_ID: return { ...state, orderDetail: action.payload }

        default: return state;
    }
}