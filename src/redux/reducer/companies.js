import { initialState } from "../Store";
import {
    GET_COMPANIES,
    DELETE_COMPANY,
    UPDATE_COMPANY,
    ADD_NEW_COMPANY,
} from "../action";

const companiesReducer = (state = initialState.companies, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_COMPANIES:
            return {...state, companies: payload };

        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter((c) => c._id !== action.payload),
            };
        case ADD_NEW_COMPANY:
            return {
                ...state,
                companies: [...state.companies, payload],
            };
        case UPDATE_COMPANY:
            let companyToUpdateIndex = state.company.findIndex(
                (c) => c._id === action.payload.id
            );
            let companyCopy = [...state.company];
            companyCopy[companyToUpdateIndex].name = action.payload.name;
            companyCopy[companyToUpdateIndex].surname = action.payload.surname;
            companyCopy[companyToUpdateIndex].email = action.payload.email;
            return {
                ...state,
                companies: companyCopy,
            };

        default:
            return state;
    }
};

export default companiesReducer;