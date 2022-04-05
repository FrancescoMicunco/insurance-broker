import React, { PureComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import lodash from 'lodash'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [value, setValue] = useState('')

    const customers = useSelector((state) => state.customers?.customers.customer)
    console.log("from dashboard", customers)

    const sortedUscendingByLName = customers?.sort(function (a, b) { return b.name.toUpperCase() - a.name.toUpperCase() })
    console.log("sorted", sortedUscendingByLName)

    const sellers = useSelector((state) => state.sellers?.sellers)
    console.log("Sellers", sellers)

    const products = useSelector((state) => state.products?.products?.product)
    console.log("Products", products)


    const totalAmount = lodash.sum(products?.map(a => a.amount))

    const actualDate = new Date()
    const thisMonth = actualDate.getMonth()

    const lastMonthProducts = products?.filter(m => new Date(m.createdAt).getMonth() === thisMonth - 1)
    const lastMonthTotalAmount = lodash.sum(lastMonthProducts?.map(a => a.amount))
    console.log("LMTA", lastMonthTotalAmount)

    const thisMonthProducts = products?.filter(m => new Date(m.createdAt).getMonth() === thisMonth)
    const thisMonthTotalAmount = lodash.sum(thisMonthProducts?.map(a => a.amount))
    console.log("TMTP", thisMonthTotalAmount)

    const lastMonthCustomers = customers?.filter(m => new Date(m.createdAt).getMonth() === thisMonth - 1)
    const totalLastMonthCustomers = lastMonthCustomers?.length
    console.log("TLMC", totalLastMonthCustomers)

    const thisMonthCustomers = customers?.filter(m => new Date(m.createdAt).getMonth() === thisMonth)
    const totalThisMonthCustomers = thisMonthCustomers?.length
    console.log("TTMC", totalThisMonthCustomers)

    const data1 = [{ name: 'total Customers', cv: thisMonthCustomers, pv: lastMonthCustomers },
    { name: 'total Revenue', cv: thisMonthProducts, pv: lastMonthProducts }]



    const data = [
        {
            "name": "Customers",
            "Last Month": 5,
            "This Month": 5,
            "amt": 2400
        },
        {
            "name": "Revenue €/1000",
            "Last Month": 7.032,
            "This Month": 2.442,
            "amt": 2210
        },

    ]

    return (
        <>
            <div style={{ color: 'gray' }}>
                <h2 className='my-md-5 text-center'>DASHBOARD</h2>

                <div className='d-flex fluid flex-column justify-content-around mt-4 flex-wrap align-items-sm-center'>
                    <div className="d-flex my-md-3" >
                        <div><p className='tDashboard, detailBodyIn'>Total active customers <span className='spanDash' > {customers?.length}</span></p></div>
                        <div><p className='tDashboard, detailBodyIn'> New Customer last month <span className='spanDash' > {totalLastMonthCustomers}</span></p></div>
                        <div><p className='tDashboard, detailBodyIn'> New Customer this month <span className='spanDash' > {totalThisMonthCustomers}</span></p></div>
                        <div><p className='tDashboard, detailBodyIn'>Total active contracts <span className='spanDash' > {products?.length}</span></p></div>

                    </div>

                    <div className="d-flex " >

                        <div><p className='tDashboard, detailBodyIn'>Total month Revenue <span className='spanDash' >€ {totalAmount}</span></p></div>
                        <div><p className='tDashboard, detailBodyIn'>Last month Revenue <span className='spanDash' >€ {lastMonthTotalAmount}</span></p></div>
                        <div><p className='tDashboard, detailBodyIn'> Currently month Revenue <span className='spanDash' >€ {thisMonthTotalAmount}</span></p></div>

                    </div>


                </div>
            </div >
            <div>
                <ResponsiveContainer width="100%" height="100%" minHeight="500px">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Last Month" fill="#8884d8" />
                        <Bar dataKey="This Month" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Dashboard
