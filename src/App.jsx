import "./App.css";
import React, { useEffect } from 'react'
import Sidebar from '../src/Components/Sidebar'
import HomePage from './pages/HomePage'
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers"
import Products from "./pages/Products"
import Sellers from "./pages/Sellers"
import CustomerDetails from './pages/CustomerDetails'
import ProductDetails from './pages/ProductDetail'
import CompanyDetails from './pages/CompanyDetails'
import Companies from "./pages/Companies"
import MyNavBar from './Components/MyNavBar'
import NotFound from "../src/pages/NotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getCustomersAction, getCompaniesAction, getSellersAction, getProductsAction } from '../src/redux/action'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    const allcustomers = '/customers?limit=5'
    const allProducts = '/products?limit=5'


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCustomersAction(allcustomers));
        dispatch(getCompaniesAction());
        dispatch(getSellersAction());
        dispatch(getProductsAction(allProducts));
    }, [])


    return (
        <div className="App">
            <BrowserRouter>
                <MyNavBar />
                <div style={{ display: 'flex' }}>
                    <div>
                        <Sidebar /></div>
                    <div style={{ backgroundColor: 'white', width: '80%', marginLeft: '15%' }}>
                        <Routes>
                            <Route exact path='/' element={<HomePage />} />
                            <Route exact path='/dashboard' element={<Dashboard />} />
                            <Route exact path='/customers' element={<Customers />} />
                            <Route exact path='/companies' element={<Companies />} />
                            <Route exact path='/salesforce' element={<Sellers />} />
                            <Route exact path='/products' element={<Products />} />
                            <Route exact path='/customers/:customerId' element={<CustomerDetails />} />
                            <Route exact path='/products/:productId' element={<ProductDetails />} />
                            <Route exact path='/companies/:companyId' element={<CompanyDetails />} />
                            <Route exact path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter >
        </div >)

}

export default App;