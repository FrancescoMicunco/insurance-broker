import { initialState } from "../Store";
import {
    GET_CUSTOMERS,
    DELETE_CUSTOMER,
    UPDATE_CUSTOMER,
    ADD_NEW_CUSTOMER,
} from "../action";

const customersReducer = (state = initialState.customers, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CUSTOMERS:
            return {...state, customers: payload };

        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter((c) => c._id !== payload),
            };
        case ADD_NEW_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers.customer, payload],
            };
        case UPDATE_CUSTOMER:
            console.log("payload update customer", payload);
            let customerToUpdateIndex = state.customers.customer.findIndex(
                (c) => c._id === payload._id
            );
            console.log("customer index", customerToUpdateIndex);
            let customerToUpdate = state.customers.customer[customerToUpdateIndex];
            console.log("customer to update", customerToUpdate);
            customerToUpdate = payload;
            console.log("customer to update with payload", customerToUpdate);
            let customersCopy = [...state.customers.customer, customerToUpdate];
            console.log("customer copy", customersCopy);

            return {
                ...state,

                customers: customersCopy,
            };

        default:
            return state;
    }
};

export default customersReducer;