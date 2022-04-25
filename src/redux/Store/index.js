import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import customersReducer from "../reducer/customer";
import companiesReducer from "../reducer/companies";
import productsReducer from "../reducer/products";
import sellersReducer from "../reducer/seller";
import { composeWithDevTools } from "redux-devtools-extension";

export const initialState = {
    customers: { customers: [] },
    companies: {
        list: [],
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

const middlewares = [thunkMiddleware];
const middlenhancer = applyMiddleware(...middlewares);
const composeEnhancer = composeWithDevTools(middlenhancer);

let configStore = createStore(bigReducer, initialState, composeEnhancer);

export default configStore;