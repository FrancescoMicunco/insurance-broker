import { initialState } from "../Store";
import {
    GET_SELLERS,
    DELETE_SELLER,
    UPDATE_SELLER,
    ADD_NEW_SELLER,
} from "../action";

const sellersReducer = (state = initialState.sellers, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SELLERS:
            return {...state, sellers: payload };

        case DELETE_SELLER:
            return {
                ...state,
                sellers: state.sellers.filter((c) => c._id !== payload),
            };
        case ADD_NEW_SELLER:
            return {
                ...state,
                sellers: [...state.sellers, payload],
            };
        case UPDATE_SELLER:
            let sellerToUpdateIndex = state.sellers.findIndex(
                (c) => c._id === payload.id
            );
            let sellerCopy = [...state.sellers];
            sellerCopy[sellerToUpdateIndex].name = action.payload.name;
            sellerCopy[sellerToUpdateIndex].surname = action.payload.surname;
            sellerCopy[sellerToUpdateIndex].email = action.payload.email;
            return {
                ...state,
                sellers: sellerCopy,
            };

        default:
            return state;
    }
};

export default sellersReducer;