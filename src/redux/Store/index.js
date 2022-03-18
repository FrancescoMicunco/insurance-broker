import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import customersReducer from "../reducer/customer";
import companiesReducer from "../reducer/companies";
import productsReducer from "../reducer/products";
import sellersReducer from "../reducer/seller";

export const initialState = {
    customers: { customers: [] },
    companies: {
        list: [],
        isSelected: false,
    },
    sellers: {
        sellers: [],
    },
    products: {
        contract: [],
    },
};

const bigReducer = combineReducers({
    customers: customersReducer,
    companies: companiesReducer,
    products: productsReducer,
    sellers: sellersReducer,
});

export let configStore = createStore(
    bigReducer,
    initialState,
    (window.__REDUX__DEVTOOL_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__) ||
    compose(applyMiddleware(thunk))
);