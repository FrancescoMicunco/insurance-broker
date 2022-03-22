import React from 'react'


const Dashboard = () => {
    return (
        <div style={{ color: 'gray' }}>
            <h2>DASHBOARD</h2>

            <div className='d-flex fluid justify-content-around mt-4 flex-wrap'>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Best Customer</h5></div>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Best Seller</h5></div>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Ending products</h5></div>
                <div style={{ border: '1px solid gray', height: '30vh', width: '60vh', marginTop: '3%', padding: '3%' }}><h5>Ending documents</h5></div>
            </div>
        </div>
    )
}

export default Dashboard
