import React from 'react'
import SingleCustomer from '../Components/SingleCustomer'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';



const users = [{
    id: 1,
    name: "num1",
    lastName: "Lnum1",
    email: "ali@ali.com",
    job: "journay",
    family: { married: true, sons: 2 },
    privacy: { first_field: true, second_field: true, third_field: false },
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

    const customers = useSelector((state) => state.customers)
    console.log('props from state Customers', customers)
    console.log('those are the users', users)
    return (
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
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>LastName</th>
                        <th>Seller</th>
                        <th>Premium</th>
                        <th>Privacy</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map(u =>

                        <tr>
                            <SingleCustomer customer={u} />
                        </tr>

                    )}
                </tbody>

            </Table>

        </div >
    )
}

export default Customers