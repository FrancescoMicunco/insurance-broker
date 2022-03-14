import React from 'react'
import { handleDelete } from '../utility/functions'
import { useNavigate } from "react-router";

const SingleCustomer = ({ customer }) => {
    const navigate = useNavigate();

    return (<>

        <td onClick={() => navigate('/customer/' + customer._id)}>{customer._id}</td>
        <td onClick={() => navigate('/customer/' + customer._id)}>{customer.name}</td>
        <td onClick={() => navigate('/customer/' + customer._id)}>{customer.email}</td>
        <td onClick={() => navigate('/customer/' + customer._id)}>{customer.avatar}</td>
        {
            customer.email ?
                <td style={{ color: 'green' }}> OK</td> : <td style={{ color: 'red' }} > NO</td>
        }

        <td onClick={console.log("user")}><i className="bi bi-person-x"> </i></td>
    </>
    )
}

export default SingleCustomer
