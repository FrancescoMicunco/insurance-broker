import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [value, setValue] = useState('')

    const customers = useSelector((state) => state.customers?.customers.customer)
    console.log("from dashboard", customers)
    const sortedUscendingByLName = customers?.sort(function (a, b) { return b.name.toUpperCase() - a.name.toUpperCase() })
    console.log("sorted", sortedUscendingByLName)

    const sellers = useSelector((state) => state.sellers?.sellers)
    console.log("Sellers", sellers)

    const products = useSelector((state) => state.products?.products?.product)
    // console.log("amount", products?.amount.toString())
    // console.log("Products", products.sort(function (a, b) { return a.amount - b.amount }))

    return (
        <div style={{ color: 'gray' }}>
            <h2>DASHBOARD</h2>

            <div className='d-flex fluid justify-content-around mt-4 flex-wrap'>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}>

                    <p>Total active customers <span style={{ color: '#1976d2', fontWeight: 'bold' }}> {customers?.length}</span></p>
                    <p>First 3 best products</p>
                </div>

            </div>
        </div >
    )
}

export default Dashboard
