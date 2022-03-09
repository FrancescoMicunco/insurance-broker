import "./App.css";
import React, { useEffect } from 'react'
import Sidebar from '../src/Components/Sidebar'
import HomePage from './pages/HomePage'
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getCustomersAction } from '../src/redux/action'
import { useSelector, useDispatch } from 'react-redux'




function App() {

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getCustomersAction()) }, [])


    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/dashboard' element={<Dashboard />} />
                    <Route path='/customers' element={<Customers />} />

                </Routes>
            </BrowserRouter>
        </div>)

}

export default App;