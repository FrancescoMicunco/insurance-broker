import React from 'react'
import Sidebar from '../Components/Sidebar'
import Routes from '../Components/Routes'

import { BrowserRouter, Route } from 'react-router-dom'


const Main = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div>
                    <Sidebar {...props} />
                    <div><Routes /></div>
                </div>

            )} />
        </BrowserRouter>
    )
}

export default Main