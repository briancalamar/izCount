import { CREATE_PRODUCT } from "./actionNames"

export const createProduct = (payload) => {
    return {
        type: CREATE_PRODUCT,
        payload,
    }
}