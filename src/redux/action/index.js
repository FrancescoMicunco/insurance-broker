export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const ADD_NEW_CUSTOMER = "ADD_NEW_CUSTOMER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";

export const GET_COMPANIES = "GET_COMPANIES";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const ADD_NEW_COMPANY = "ADD_NEW_COMPANY";
export const UPDATE_COMPANY = "UPDATE_COMPANY";

//  ========== COMPANY SECTION  ============
export const addNewCompanyAction = (newCompany) => {
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/companies", {
                method: "POST",
                body: JSON.stringify(newCompany),
                headers: new Headers({ "Content-Type": "application/json" }),
            });
            if (res.ok) {
                console.log("this is c =>", newCompany);
                dispatch({ type: ADD_NEW_COMPANY, payload: newCompany });
                alert("successful created!");
            } else {
                alert("Failed creating new company");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const getCompaniesAction = () => {
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/companies");
            if (res.ok) {
                const companies = await res.json();
                console.log("companies", companies);
                dispatch({ type: GET_COMPANIES, payload: companies });
            } else {
                console.log("error fetching data");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const deleteCompanyAction = (_id) => {
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/companies/" + _id, {
                method: "DELETE",
            });
            if (res.ok) {
                dispatch({ type: DELETE_COMPANY, payload: _id });
                alert("successful deleted!");
            } else {
                alert("Failed to delete");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

//  ========== CUSTOMER SECTION ============
export const getCustomersAction = () => {
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/customers");
            if (res.ok) {
                const customers = await res.json();
                console.log("customers", customers);
                dispatch({ type: GET_CUSTOMERS, payload: customers });
            } else {
                console.log("error fetching data");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const deleteCustomerAction = (_id) => {
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/customers/" + _id, {
                method: "DELETE",
            });
            if (res.ok) {
                dispatch({ type: DELETE_CUSTOMER, payload: _id });
                alert("successful deleted!");
            } else {
                alert("Failed to delete");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const addNewCustomerAction = (newCustomer) => {
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/customers", {
                method: "POST",
                body: JSON.stringify(newCustomer),
                headers: new Headers({ "Content-Type": "application/json" }),
            });
            if (res.ok) {
                console.log("this is c =>", newCustomer);
                dispatch({ type: ADD_NEW_CUSTOMER, payload: newCustomer });
                alert("successful created!");
            } else {
                alert("Failed creating new customer");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const updateCustomerAction = (c, i) => {
    return async(dispatch) => {
        try {
            const res = await fetch(`http://localhost:3001/customers/${i}`, {
                method: "PUT",
                body: JSON.stringify(c),
                headers: new Headers({ "Content-Type": "application/json" }),
            });
            if (res.ok) {
                console.log("this is c =>", c);

                dispatch({ type: UPDATE_CUSTOMER, payload: c });

                alert("successful created!");
            } else {
                alert("Failed creating new customer");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};