export function goForward() {
    alert("1 page more");
}

export function goBack() {
    alert("1 page less");
}

export function handleSearch(input) {
    alert("this is your keyword", input);
}

export function handleDelete() {
    alert("confirm delete customer?");
}

export const handleAddCustomer = async() => {
    const customer = { name: "allio", email: "allio@gmail.com" };
    try {
        const res = fetch(`${process.env.REACT_APP_BE_DOMAIN}/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customer),
        });
        if (res.ok) {
            console.log("all is ok");
        } else {
            alert("customer error");
        }
    } catch (error) {
        alert("Some error occurred form the server. Try later again!");
    }
};

export const deleteCustomer = async(_id) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_BE_DOMAIN}/customers/` + _id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            }
        );
        if (res.ok) {
            alert("Customer correctly deleted");
        } else {
            alert("this customer doesn't exist!");
        }
    } catch (error) {
        alert(error.message);
    }
};