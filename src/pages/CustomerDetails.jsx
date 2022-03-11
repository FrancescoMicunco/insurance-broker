import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'



import React from 'react'

function CustomerDetails() {

    const [customerDetail, setCustomerDetail] = useState(undefined)

    const customers = useSelector((state) => state.customers)

    console.log('customers from detail', customers)

    const params = useParams()
    console.log(params)

    useEffect(() => {

        let customerId = params.customerId

        // let customerToShow = customers.find(c => c.id.toString() === customerId)
        let customerToShow = 'uno'

        setCustomerDetail(customerToShow)

        console.log(customerDetail)
    }, [])

    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default CustomerDetails
