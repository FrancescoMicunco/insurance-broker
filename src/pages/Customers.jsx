import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleCustomer from '../Components/itemCustomer'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Table } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { goForward, goBack } from '../utility/functions'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { addNewCustomerAction } from '../redux/action'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


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

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const newCustomer = {
        name: name,
        lastname: lastname,
        password: password,
        email: email,
    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const customers = useSelector((state) => state.customers.customers)

    console.log('customers from redux', customers)

    console.log('newCustomer', newCustomer)

    const addNewCustomer = (newCustomer) => {

        dispatch(addNewCustomerAction(newCustomer))

        setOpen(false)
    }


    return (
        <div>
            <div style={{ color: 'gray' }} >
                <div className='d-flex'>

                    {/* ================= search section */}


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

                    {/* =========== add customer section */}
                    <Button onClick={handleOpen}>Add Customer</Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add a new Customer
                            </Typography>
                            <div className='d-flex' style={{ width: '80vw' }}>

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            id="outlined-disabled"
                                            label="Last name"
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />

                                        <TextField
                                            required
                                            id="outlined-disabled"
                                            label="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </Box>
                            </div>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You are adding a new customer.
                            </Typography>

                            <Button variant="outlined" onClick={() => { addNewCustomer(newCustomer) }}>Add</Button>
                        </Box>
                    </Modal>


                </div>
            </div>


            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>LastName <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Seller <i className="bi bi-arrow-down-up"></i></th>
                        <th>Premium <i className="bi bi-arrow-down-up"></i></th>
                        <th>Privacy <i className="bi bi-arrow-down-up"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {customers?.map(u =>
                        <tr key={u._id} style={{ cursor: 'pointer' }}>
                            <SingleCustomer customer={u} />
                        </tr>
                    )}
                </tbody>
            </Table>

        </div >
    )
}

export default Customers