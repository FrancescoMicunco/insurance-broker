export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const ADD_CUSTOMER = "ADD_CUSTOMER";

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

// export const deleteCustomerAction = (_id) => ({
//     type: DELETE_CUSTOMER,
//     payload: _id,
// });

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