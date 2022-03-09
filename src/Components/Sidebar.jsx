import React from 'react'
import { SidebarData } from '../utility/datamenu.js'
import { Link } from 'react-router-dom'
import '../style/sidebar.css'


const Sidebar = () => {

    console.log("data", SidebarData)
    return (
        <div className="Sidebar">
            <div className='logo'><h1>Logo</h1></div>
            {SidebarData.map((item, index) =>
                <Link to={item.link} key={index}>
                    <div className='Row'>
                        <div className='name'>{item.name}</div><div className='icon'>{item.icon}</div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Sidebar
