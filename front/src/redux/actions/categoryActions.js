import { GET_CATEGORIES } from "./actionNames"

// export const createProduct = (payload) => {
//     return {
//         type: CREATE_PRODUCT,
//         payload,
//     }
// }

export const getCategories = (payload) => {
    return  {
        type: GET_CATEGORIES,
        payload,
    }
}