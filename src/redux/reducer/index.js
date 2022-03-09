import { initialState } from "../Store";
import { GET_CUSTOMERS } from "../action";

const mainReducer = (state = initialState.customers, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CUSTOMERS:
            return {...state, customers: payload };

        default:
            return state;
    }
};

export default mainReducer;