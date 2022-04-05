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

    const data = [{ name: 'total Customers', cv: thisMonthCustomers, pv: lastMonthCustomers },
    { name: 'total Revenue', cv: thisMonthProducts, pv: lastMonthProducts }]



    const data1 = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (
        <div style={{ color: 'gray' }}>
            <h2 className='my-md-4'>DASHBOARD</h2>

            <div className='d-flex fluid flex-column justify-content-around mt-4 flex-wrap '>
                <div className="d-flex " >
                    <div><p className='tDashboard, detailBodyIn'>Total active customers <span className='spanDash' > {customers?.length}</span></p></div>
                    <div><p className='tDashboard, detailBodyIn'> New Customer last month <span className='spanDash' > {totalLastMonthCustomers}</span></p></div>
                    <div><p className='tDashboard, detailBodyIn'> New Customer this month <span className='spanDash' > {totalThisMonthCustomers}</span></p></div>
                    <div><p className='tDashboard, detailBodyIn'>Total active contracts <span className='spanDash' > {products?.length}</span></p></div>

                </div>

                <div className="d-flex " >

                    <div><p className='tDashboard, detailBodyIn'>Last month revenue <span className='spanDash' >€ {totalAmount}</span></p></div>
                    <div><p className='tDashboard, detailBodyIn'>Last month revenue <span className='spanDash' >€ {lastMonthTotalAmount}</span></p></div>
                    <div><p className='tDashboard, detailBodyIn'> Currently month Revenue <span className='spanDash' >€ {thisMonthTotalAmount}</span></p></div>

                </div>
                <div>
                    <ResponsiveContainer width="100%" height="100%">
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
                            <Bar dataKey="cv" fill="#8884d8" />
                            <Bar dataKey="pv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>


            </div>
        </div >
    )
}

export default Dashboard
