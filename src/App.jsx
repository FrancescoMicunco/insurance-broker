import "./App.css";
import React from 'react'
import Sidebar from '../src/Components/Sidebar'

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar />
                <Routes>

                    <Route exact path='/' component={Dashboard} />
                    <Route path='/customers' component={Customers} />

                </Routes>
            </BrowserRouter>
        </div>)

}

export default App;