import { initialState } from "../Store";
import {
    GET_PRODUCTS,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    ADD_NEW_PRODUCT,
} from "../action";

const productsReducer = (state = initialState.products, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS:
            return {...state, products: payload };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((c) => c._id !== payload),
            };
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                products: [...state.products, payload],
            };
        case UPDATE_PRODUCT:
            let productToUpdateIndex = state.products.findIndex(
                (c) => c._id === payload.id
            );
            let productCopy = [...state.products];
            productCopy[productToUpdateIndex].name = action.payload.name;
            productCopy[productToUpdateIndex].surname = action.payload.surname;
            productCopy[productToUpdateIndex].email = action.payload.email;
            return {
                ...state,
                products: productCopy,
            };

        default:
            return state;
    }
};

export default productsReducer;