import { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../actions/actionNames";


const initialState = {
    products: null,
    productDetail: null,
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: return { ...state, products: action.payload }

        case GET_PRODUCT_BY_ID: return { ...state, productDetail: action.payload }

        case CREATE_PRODUCT: {
            if(state.products === null) {
                return { ...state, products: [action.payload]}
            }
            else return { ...state, products: [...state.products, action.payload]}
        } 

        default: return state;
    }
}