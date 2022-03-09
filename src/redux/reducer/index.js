import { initialState } from "../Store";

const mainReducer = (state = initialState.customers, action) => {
    const { type, payload } = action;
    switch (type) {
        default: return state;
    }
};

export default mainReducer;