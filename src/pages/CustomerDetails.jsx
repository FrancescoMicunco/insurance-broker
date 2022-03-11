import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'



import React from 'react'

function CustomerDetails() {

    const [customerDetail, setCustomerDetail] = useState(undefined)

    const customers = useSelector((state) => state.customers).data


    const params = useParams()


    useEffect(() => {

        let customerId = params.customerId

        console.log('id', customerId)

        let cToShow = customers.find(c => c.id.toString() === customerId)

        console.log("cToShow", cToShow)

        if (cToShow) setCustomerDetail(cToShow)

        console.log("customer to show", customerDetail)
    }, [customerDetail])

    return (
        <div>
            <h1>{customerDetail?.first_name}</h1>
            <img src={customerDetail?.avatar} alt={customerDetail?.first_Name} />
        </div>
    )
}

export default CustomerDetails
