import { GET_SIZES } from "./actionNames"

// export const createProduct = (payload) => {
//     return {
//         type: CREATE_PRODUCT,
//         payload,
//     }
// }

export const getSizes = (payload) => {
    return  {
        type: GET_SIZES,
        payload,
    }
}