import "./App.css";
import React, { useEffect } from 'react'
import Sidebar from '../src/Components/Sidebar'
import HomePage from './pages/HomePage'
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers"
import Companies from "../src/pages/Companies"
import NotFound from "../src/pages/NotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getCustomersAction } from '../src/redux/action'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getCustomersAction()) }, [])


    return (
        <div className="App">
            <BrowserRouter>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Sidebar /></div>
                    <div>
                        <Routes>
                            <Route exact path='/' element={<HomePage />} />
                            <Route exact path='/dashboard' element={<Dashboard />} />
                            <Route exact path='/customer' element={<Customers />} />
                            <Route exact path='/companies' element={<Companies />} />
                            <Route exact path='/customer/:customer' element={<Companies />} />
                            <Route exact path='*' element={<NotFound />} />
                        </Routes></div>
                </div>
            </BrowserRouter >
        </div >)

}

export default App;