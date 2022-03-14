export const GET_CUSTOMERS = "GET_CUSTOMERS";

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