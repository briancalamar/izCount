import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../actions/actionNames";


const initialState = {
    products: null,
    productDetail: null,
}

export default productReducer = (state = initialState, action) => {
    switch (action.name) {
        case GET_PRODUCTS: return { ...state, products: action.payload }

        case GET_PRODUCT_BY_ID: return { ...state, productDetail: action.payload }

        default: return state;
    }
}