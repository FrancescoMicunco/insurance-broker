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
                customers: state.customers.filter((c) => c._id !== action.payload),
            };
        case ADD_NEW_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, payload],
            };
        case UPDATE_CUSTOMER:
            let customerToUpdateIndex = state.customers.findIndex(
                (c) => c._id === action.payload.id
            );
            let customersCopy = [...state.customers];
            customersCopy[customerToUpdateIndex].name = action.payload.name;
            customersCopy[customerToUpdateIndex].surname = action.payload.surname;
            customersCopy[customerToUpdateIndex].email = action.payload.email;
            return {
                ...state,
                customers: customersCopy,
            };

        default:
            return state;
    }
};

export default customersReducer;