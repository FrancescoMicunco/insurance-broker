import { initialState } from "../Store";
import { GET_CUSTOMERS, DELETE_CUSTOMER } from "../action";

const mainReducer = (state = initialState.customers, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CUSTOMERS:
            return {...state, customers: payload };

        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter((c) => c._id !== action.payload),
            };

        default:
            return state;
    }
};

export default mainReducer;