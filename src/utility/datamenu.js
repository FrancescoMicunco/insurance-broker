import React from "react";

import {
    MdOutlineDashboard,
    MdLogout,
    MdSettings,
    MdPeopleAlt,
    MdQueryStats,
    MdBusiness,
    MdBusinessCenter,
} from "react-icons/md";

export const SidebarData = [{
        name: "Dashboard",
        icon: < MdOutlineDashboard / > ,
        link: "/dashboard",
    },
    {
        name: "Customers",
        icon: < MdPeopleAlt / > ,
        link: "/customers",
    },
    {
        name: "Companies",
        icon: < MdBusiness / > ,
        link: "/companies",
    },
    {
        name: "Products",
        icon: < MdBusinessCenter / > ,
        link: "/products",
    },
    {
        name: "Sales force",
        icon: < MdOutlineDashboard / > ,
        link: "/salesforce",
    },
    {
        name: "Stats",
        icon: < MdQueryStats / > ,
        link: "/stats",
    },
    {
        name: "Settings",
        icon: < MdSettings / > ,
        link: "/setting",
    },
    {
        name: "Logout",
        icon: < MdLogout / > ,
        link: "/logout",
    },
];