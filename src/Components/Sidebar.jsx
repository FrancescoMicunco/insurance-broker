import React from 'react'
import { SidebarData } from '../utility/datamenu.js'
import { Link } from 'react-router-dom'


const Sidebar = () => {

    console.log("data", SidebarData)
    return (
        <div>
            <div><h1>Logo</h1></div>
            {SidebarData.map((item, index) =>
                <Link to={item.link} key={index}>
                    <div>{item.name}{item.icon}</div></Link>
            )}
        </div>
    )
}

export default Sidebar
