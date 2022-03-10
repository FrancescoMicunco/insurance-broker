import React from 'react'

const SingleCustomer = ({ customer }) => {

    return (<>
        <td>{customer.id}</td>
        <td>{customer.lastName}</td>
        <td>{customer.seller}</td>
        <td>{customer.contracts.premium}</td>
        {
            customer.privacy.first_field ?
                <td style={{ color: 'green' }}> OK</td> : <td style={{ color: 'red' }} > NO</td>
        }
        <td><i className="bi bi-person-x"> </i></td>
    </>
    )
}

export default SingleCustomer
