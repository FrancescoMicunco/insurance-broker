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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { addNewCustomerAction } from '../redux/action'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
    const [seller, setSeller] = useState('')
    const [sellerId, setSellerId] = useState('')
    const [userName, setUserName] = useState('')
    const [isPrivacy, setIsPrivacy] = useState(false)
    const [isCompliance, setIsCompliance] = useState(false)

    const newCustomer = {
        name: name,
        last_name: lastname,
        password: password,
        email: email,
        userName: userName,
        seller: sellerId,
        isPrivacy: isPrivacy,
        isCompliance: isCompliance
    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const sellers = useSelector((state) => state.sellers?.sellers)

    const handleChangeSeller = (event) => {

        event.preventDefault()

        setSeller(event.target.value);
        console.log("seller", seller)

        const id = sellers.find(s => s?.name === seller)
        console.log("seller id", id)

        setSellerId(id)
        console.log("seller id ", sellerId)

    };

    const handleIsPrivacy = (event) => {
        setIsPrivacy(event.target.checked);
    };

    const handleIsCompliance = (event) => {
        setIsCompliance(event.target.checked);
    };


    const customers = useSelector((state) => state.customers?.customers)

    const addNewCustomer = (newCustomer) => {

        dispatch(addNewCustomerAction(newCustomer))

        setOpen(false)
    }


    return (
        <div>
            <div style={{ color: 'gray' }} >

                <div className='d-flex justify-content-around m-md-3 '>
                    <h2>CUSTOMERS</h2>
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
                        {/* =========== add customer section */}
                        <Button variant="contained" size="small" endIcon={<AddCircleOutlineIcon />} onClick={handleOpen}>New Customer</Button>

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

                                            <FormControl >
                                                <InputLabel id="demo-simple-select-label">Seller</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={seller}
                                                    label="Seller"
                                                    onChange={(e) => handleChangeSeller(e)}
                                                >
                                                    {sellers?.map(n =>
                                                        <MenuItem key={n.index}>{n.name}</MenuItem>

                                                    )}
                                                </Select>
                                            </FormControl>

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

                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="userName"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                            />

                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />

                                            <FormControlLabel control={<Checkbox
                                                checked={isPrivacy}

                                                onChange={handleIsPrivacy}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />} label="Privacy" />

                                            <FormControlLabel control={<Checkbox
                                                checked={isCompliance}
                                                onChange={handleIsCompliance}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />} label="Compliance" />

                                        </div>
                                    </Box>
                                </div>

                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    You are adding a new customer.
                                </Typography>

                                <Button variant="contained" size="small" endIcon={<AddCircleOutlineIcon />} onClick={() => { addNewCustomer(newCustomer) }}>SEND</Button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>


            <i className="bi bi-arrow-left mr-md-3" onClick={() => goBack()}></i>
            <i className="bi bi-arrow-right" onClick={() => goForward()}></i>

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Last Name <i className="bi bi-arrow-down-up"></i></th>
                        <th>Seller <i className="bi bi-arrow-down-up"></i></th>
                        <th>email <i className="bi bi-arrow-down-up"></i></th>
                        <th>Privacy <i className="bi bi-arrow-down-up"></i></th>
                        <th>Compliance <i className="bi bi-arrow-down-up"></i></th>
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