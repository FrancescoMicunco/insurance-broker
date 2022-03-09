import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducer";

export const initialState = {
    customers: { customers: [] },
};

export let configStore = createStore(
    mainReducer,
    initialState,
    (window.__REDUX__DEVTOOL_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__) ||
    compose(applyMiddleware(thunk))
);