import React from 'react'
import SingleCustomer from '../Components/itemCustomer'
import { useSelector } from 'react-redux'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Table, Form, Button, FormControl } from 'react-bootstrap'



const users = [{
    id: 1,
    name: "num1",
    lastName: "Lucci",
    email: "ali@ali.com",
    job: "journay",
    family: { married: true, sons: 2 },
    privacy: { first_field: true, second_field: false, third_field: false },
    compliance: { identify: true, PPI: false },
    isActive: true,
    contracts: {
        contract_name: 'aliud',
        premium: 500.20,
        rate_earnings: 5,
    },
    seller: 'Arino Lacca',


},
{
    id: 2,
    name: "num2",
    lastName: "Lnum2",
    email: "uri@uri.com",
    job: "manager",
    family: { married: false, sons: 2 },
    privacy: { first_field: true, second_field: true, third_field: false },
    compliance: { identify: true, PPI: true },
    isActive: true,
    contracts: {
        contract_name: 'lassm',
        premium: 200.20,
        rate_earnings: 5,
    },
    seller: 'Verio Sola',
},
{
    id: 3,
    name: "num3",
    lastName: "Lnum3",
    email: "sushi@sushi.com",
    job: "manager",
    family: { married: false, sons: 1 },
    privacy: { first_field: false, second_field: true, third_field: false },
    compliance: { identify: true, PPI: false },
    isActive: true,
    contracts: {
        contract_name: 'pulp',
        premium: 1200.00,
        rate_earnings: 5,
    },
    seller: 'Arino Lacca',
},
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));





const Customers = () => {

    const updateCustomer = () => {
        alert("Stai modificando il cliente")
    }

    const customers = useSelector((state) => state.customers)
    console.log('props from state Customers', customers)
    console.log('those are the users', users)
    return (
<div>
        <div style={{ color: 'gray' }} >
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
                    <div>
                        <i class="bi bi-arrow-left"></i>
                        <i class="bi bi-arrow-right"></i>
                    </div>
           </div>


                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>LastName <i class="bi bi-arrow-down-up"></i>
                            </th>
                            <th>Seller <i class="bi bi-arrow-down-up"></i></th>
                            <th>Premium <i class="bi bi-arrow-down-up"></i></th>
                            <th>Privacy <i class="bi bi-arrow-down-up"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u =>

                            <tr onClick={updateCustomer}>
                                <SingleCustomer customer={u} />
                            </tr>

                        )}
                    </tbody>

                </Table>
          
        </div >
    )
}

export default Customers