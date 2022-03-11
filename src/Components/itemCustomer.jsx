import React from 'react'
import { handleDelete } from '../utility/functions'
import { useNavigate } from "react-router";

const SingleCustomer = ({ customer }) => {
    const navigate = useNavigate();

    return (<>

        <td onClick={() => navigate('/customer/' + customer.id)}>{customer.id}</td>
        <td onClick={() => navigate('/customer/' + customer.id)}>{customer.last_name}</td>
        <td onClick={() => navigate('/customer/' + customer.id)}>{customer.email}</td>
        <td onClick={() => navigate('/customer/' + customer.id)}>{customer.avatar}</td>
        {
            customer.email ?
                <td style={{ color: 'green' }}> OK</td> : <td style={{ color: 'red' }} > NO</td>
        }

        <td onClick={handleDelete}><i className="bi bi-person-x"> </i></td>
    </>
    )
}

export default SingleCustomer
