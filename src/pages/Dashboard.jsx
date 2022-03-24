import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [value, setValue] = useState('')

    const customers = useSelector((state) => state.customers?.customers.customer)
    console.log("from dashboard", customers)

    const sellers = useSelector((state) => state.sellers?.sellers)

    return (
        <div style={{ color: 'gray' }}>
            <h2>DASHBOARD</h2>

            <div className='d-flex fluid justify-content-around mt-4 flex-wrap'>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}>
                    <h5>Best Customer</h5>
                    <p>more then one product</p>
                    <p>max total amount</p>
                </div>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Best Seller</h5></div>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Ending products</h5></div>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Ending documents</h5></div>
            </div>
        </div>
    )
}

export default Dashboard
