import "./App.css";
import React, { useEffect } from 'react'
import Sidebar from '../src/Components/Sidebar'
import HomePage from './pages/HomePage'
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers"
import CustomerDetails from './pages/CustomerDetails'
import Companies from "./pages/Companies"
import MyNavBar from './Components/MyNavBar'
import NotFound from "../src/pages/NotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getCustomersAction } from '../src/redux/action'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getCustomersAction()) }, [])


    return (
        <div className="App">
            <BrowserRouter>
                <MyNavBar />
                <div style={{ display: 'flex' }}>
                    <div>
                        <Sidebar /></div>
                    <div style={{ backgroundColor: 'gainsboro', width: '100%' }}>
                        <Routes>
                            <Route exact path='/' element={<HomePage />} />
                            <Route exact path='/dashboard' element={<Dashboard />} />
                            <Route exact path='/customer' element={<Customers />} />
                            <Route exact path='/companies' element={<Companies />} />
                            <Route exact path='/customer/:customerId' element={<CustomerDetails />} />
                            <Route exact path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter >
        </div >)

}

export default App;