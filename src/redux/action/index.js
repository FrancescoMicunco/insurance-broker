export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const ADD_NEW_CUSTOMER = "ADD_NEW_CUSTOMER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";

export const GET_COMPANIES = "GET_COMPANIES";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const ADD_NEW_COMPANY = "ADD_NEW_COMPANY";
export const UPDATE_COMPANY = "UPDATE_COMPANY";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const GET_SELLERS = "GET_SELLERS";
export const DELETE_SELLER = "DELETE_SELLER";
export const ADD_NEW_SELLER = "ADD_NEW_SELLER";
export const UPDATE_SELLER = "UPDATE_SELLER";

//  ========= SALESFORCE SECTION  =================

export const addNewSellersAction = (newSeller) => {
    return async(dispatch) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_DOMAIN}/companies`, {
                method: "POST",
                body: JSON.stringify(newSeller),
                headers: new Headers({ "Content-Type": "application/json" }),
            });
            if (res.ok) {
                console.log("this is c =>", newSeller);
                dispatch({ type: ADD_NEW_SELLER, payload: newSeller });
                alert("successful created!");
            } else {
                alert("Failed creating new company");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const getSellersAction = () => {
    return async(dispatch) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_DOMAIN}/salesforce`);
            if (res.ok) {
                const sellers = await res.json();
                console.log("sellers", sellers);
                dispatch({ type: GET_SELLERS, payload: sellers });
            } else {
                console.log("error fetching data");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const deleteSellerAction = (id) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_DOMAIN}/salesforce/` + id, {
                    method: "DELETE",
                }
            );
            if (res.ok) {
                dispatch({ type: DELETE_SELLER, payload: id });
                alert("successful deleted!");
            } else {
                alert("Failed to delete");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

//  ========== PRODUCT SECTION  =============
export const addNewProductAction = (newProduct) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `
                ${process.env.REACT_APP_BE_DOMAIN}
                /products`, {
                    method: "POST",
                    body: JSON.stringify(newProduct),
                    headers: new Headers({ "Content-Type": "application/json" }),
                }
            );
            if (res.ok) {
                console.log("this is c =>", newProduct);
                dispatch({ type: ADD_NEW_PRODUCT, payload: newProduct });
                alert("successful created!");
            } else {
                alert("Failed creating new product");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const getProductsAction = (pages) => {
    return async(dispatch) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_DOMAIN}${pages}`);
            if (res.ok) {
                const products = await res.json();
                console.log("products", products);
                dispatch({ type: GET_PRODUCTS, payload: products });
            } else {
                console.log("error fetching data");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const deleteProductAction = (id) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_DOMAIN}/products/` + id, {
                    method: "DELETE",
                }
            );
            if (res.ok) {
                dispatch({ type: DELETE_PRODUCT, payload: id });
                alert("successful deleted!");
            } else {
                alert("Failed to delete");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const updateProductAction = (p, i) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `
                ${process.env.REACT_APP_BE_DOMAIN}
                /products/${i}
                `, {
                    method: "PUT",
                    body: JSON.stringify(p),
                    headers: new Headers({ "Content-Type": "application/json" }),
                }
            );
            if (res.ok) {
                console.log("this is p =>", p);

                dispatch({ type: UPDATE_PRODUCT, payload: p });

                alert("successful created!");
            } else {
                alert("Failed creating new customer");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

//  ========== COMPANY SECTION  ============
export const addNewCompanyAction = (newCompany) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `
                ${process.env.REACT_APP_BE_DOMAIN}
                /companies`, {
                    method: "POST",
                    body: JSON.stringify(newCompany),
                    headers: new Headers({ "Content-Type": "application/json" }),
                }
            );
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
            const res = await fetch(`${process.env.REACT_APP_BE_DOMAIN}/companies`);
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

export const deleteCompanyAction = (id) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `
                ${process.env.REACT_APP_BE_DOMAIN}
                /companies/` + id, {
                    method: "DELETE",
                }
            );
            if (res.ok) {
                dispatch({ type: DELETE_COMPANY, payload: id });
                alert("successful deleted!");
            } else {
                alert("Failed to delete");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const updateCompanyAction = (c, i) => {
    return async(dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_DOMAIN}/companies/${i}`, {
                    method: "PUT",
                    body: JSON.stringify(c),
                    headers: new Headers({ "Content-Type": "application/json" }),
                }
            );
            if (res.ok) {
                console.log("this is c =>", c);

                dispatch({ type: UPDATE_COMPANY, payload: c });

                alert("successful created!");
            } else {
                alert("Failed creating new customer");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

//  ========== CUSTOMER SECTION ============
export const getCustomersAction = (pages = "/customers") => {
    return async(dispatch) => {
        let url = `${process.env.REACT_APP_BE_DOMAIN}${pages}`;
        console.log("this is url", url);
        try {
            const res = await fetch(url);
            if (res.ok) {
                const customers = await res.json();
                console.log("customer from index", customers);
                dispatch({ type: GET_CUSTOMERS, payload: customers });
            } else {
                console.log("error fetching data");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};

export const deleteCustomerAction = (id) => {
    console.log("this id from customer", id);
    return async(dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_DOMAIN}/customers/` + id, {
                    method: "DELETE",
                }
            );
            if (res.ok) {
                dispatch({ type: DELETE_CUSTOMER, payload: id });
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
            const res = await fetch(
                `
                ${process.env.REACT_APP_BE_DOMAIN}
                /customers`, {
                    method: "POST",
                    body: JSON.stringify(newCustomer),
                    headers: new Headers({ "Content-Type": "application/json" }),
                }
            );
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
    let cToUpdate = console.log("I & c", c, i);
    return async(dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_DOMAIN}/customers/${i}`, {
                    method: "PUT",
                    body: JSON.stringify({ cToUpdate }),
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log("res", res);
            if (res.ok) {
                console.log("this is c =>", c);

                dispatch({
                    type: UPDATE_CUSTOMER,
                    payload: { cToUpdate },
                });

                alert("successful updated!");
            } else {
                alert("Failed updating new customer");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};