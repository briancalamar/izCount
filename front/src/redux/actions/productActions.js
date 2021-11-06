import { CREATE_PRODUCT, GET_PRODUCTS } from "./actionNames"

export const createProduct = (payload) => {
    return {
        type: CREATE_PRODUCT,
        payload,
    }
}

export const getProducts = (payload) => {
    return  {
        type: GET_PRODUCTS,
        payload,
    }
}