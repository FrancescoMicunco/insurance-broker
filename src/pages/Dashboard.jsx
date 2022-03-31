import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import lodash from 'lodash'
import Moment from 'react-moment';

const Dashboard = () => {
    const [value, setValue] = useState('')

    const customers = useSelector((state) => state.customers?.customers.customer)
    console.log("from dashboard", customers)
    const sortedUscendingByLName = customers?.sort(function (a, b) { return b.name.toUpperCase() - a.name.toUpperCase() })
    console.log("sorted", sortedUscendingByLName)

    const sellers = useSelector((state) => state.sellers?.sellers)
    console.log("Sellers", sellers)

    const products = useSelector((state) => state.products?.products?.product)
    console.log("products", products)

    const totalAmount = lodash.sum(products?.map(a => a.amount))

    const d = new Date()
    const thisMonth = d.getMonth()

    const bestProductLastMonth = products?.filter(d => Number(d.createdAt[6]) === thisMonth)

    // .map(t => t.amount)
    console.log("bestProduct month", bestProductLastMonth)



    return (
        <div style={{ color: 'gray' }}>
            <h2 className='my-md-4'>DASHBOARD</h2>

            <div className='d-flex fluid flex-column justify-content-around mt-4 flex-wrap '>
                <div className='detailBody' >
                    <p className='tDashboard'>Total active customers <span className='spanDash' > {customers?.length}</span></p>
                    <p className='tDashboard'> Total Revenue <span className='spanDash' >€ {totalAmount}</span></p>
                    <p className='tDashboard'> </p>
                </div>
                <div className='detailBody' >
                    <p className='tDashboard'>Total active contracts <span className='spanDash' > {products?.length}</span></p>
                    <p className='tDashboard'>Last month revenue </p>
                    <p className='tDashboard'> New Customer this month</p>
                </div>
                <div className='detailBody' >
                    <p className='tDashboard'>Total active customers <span className='spanDash' > {customers?.length}</span></p>
                    <p className='tDashboard'> New Customer this month</p>
                </div>

            </div>
        </div >
    )
}

export default Dashboard
