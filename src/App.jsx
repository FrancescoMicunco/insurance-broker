import "./App.css";
import React from 'react'
import Sidebar from '../src/Components/Sidebar'
import HomePage from './pages/HomePage'
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/customers' element={<Customers />} />

                </Routes>
            </BrowserRouter>
        </div>)

}

export default App;