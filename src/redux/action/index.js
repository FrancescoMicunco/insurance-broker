export const GET_CUSTOMERS = "GET_CUSTOMERS";

export const getCustomersAction = () => {
    return async(dispatch) => {
        try {
            const res = await fetch("https://reqres.in/api/users?page=2");
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