export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const ADD_NEW_CUSTOMER = "ADD_NEW_CUSTOMER";

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
    console.log("this is c =>", newCustomer);
    return async(dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCustomer),
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