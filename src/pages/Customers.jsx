import React from 'react'
import { useState } from 'react'
import SingleCustomer from '../Components/itemCustomer'
import { useSelector } from 'react-redux'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Table, Button, } from 'react-bootstrap'
import { goForward, goBack, handleAddCustomer, deleteCustomer } from '../utility/functions'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';




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

];




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
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

    const [search, setSearch] = useState('')


    const customers = useSelector((state) => state.customers)

    console.log('customers from redux', customers.data)


    return (
        <div>
            <div style={{ color: 'gray' }} >
                <div className='d-flex'>

                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="list"
                                control={<Switch color="primary" />}
                                label="list"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>

                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => { setSearch(e.target.value) }}
                            value={search}
                        />
                    </Search>

                </div>
                <div>

                    <i class="bi bi-arrow-left" onClick={() => goBack()}></i>
                    <i class="bi bi-arrow-right" onClick={() => goForward()}></i>
                    <Button onClick={handleAddCustomer}>Add Customer</Button>
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
                    {customers?.map(u =>
                        <tr style={{ cursor: 'pointer' }}>
                            <SingleCustomer key={u._id} customer={u} />
                        </tr>
                    )}
                </tbody>
            </Table>

        </div >
    )
}

export default Customers