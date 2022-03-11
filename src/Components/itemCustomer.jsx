import React from 'react'
import { handleDelete } from '../utility/functions'

const SingleCustomer = ({ customer }) => {

    const updateCustomer = () => {
        alert("Stai modificando il cliente")
    }

    return (<>
        <td onClick={updateCustomer}>{customer.id}</td>
        <td onClick={updateCustomer}>{customer.lastName}</td>
        <td onClick={updateCustomer}>{customer.seller}</td>
        <td onClick={updateCustomer}>{customer.contracts.premium}</td>
        {
            customer.privacy.first_field ?
                <td style={{ color: 'green' }}> OK</td> : <td style={{ color: 'red' }} > NO</td>
        }
        <td onClick={handleDelete}><i className="bi bi-person-x"> </i></td>
    </>
    )
}

export default SingleCustomer
