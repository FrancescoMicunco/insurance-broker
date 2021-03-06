import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleCustomer from '../Components/itemCustomer'
import { getCustomersAction } from '../redux/action'
import { InputGroup, Form } from 'react-bootstrap'
import InputBase from '@mui/material/InputBase';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import { Table } from 'react-bootstrap'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { addNewCustomerAction } from '../redux/action'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LastPageIcon from '@mui/icons-material/LastPage';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';




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

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',

        },
        neutral: {
            main: '#ac319d',
            contrastText: '#fff',
        },
    },
});


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
    const [sellerId, setSellerId] = useState('')
    const [seller, setSeller] = useState(undefined)
    const [userName, setUserName] = useState('')
    const [value, setValue] = React.useState(new Date());
    const [healt, setHealt] = useState({ surgery: "false", medicine: "false" })
    const [isHealt, setIsHealt] = useState(false)
    const [gender, setGender] = useState('')
    const [marital, setMarital] = useState('')
    const [isPrivacy, setIsPrivacy] = useState(false)
    const [isCompliance, setIsCompliance] = useState(false)
    const [pages, setPages] = useState('')
    const [search, setSearch] = useState('')
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const generalGender = ["MALE", "FEMALE", "OTHER"]
    const generalMarital = ["MARRIED", "DIVORCED", "SEPARATE", "CELIBATE/MAIDEN"]


    const customers = useSelector((state) => state.customers?.customers)

    const sellers = useSelector((state) => state.sellers?.sellers)


    // MODAL

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const newCustomer = {
        name: name,
        last_name: lastname,
        birth_date: value,
        gender: gender,
        userName: userName,
        password: password,
        email: email,
        healt: healt,
        marital: marital,
        isHealt: isHealt,
        seller: sellerId,
        isPrivacy: isPrivacy,
        isCompliance: isCompliance
    }


    const dispatch = useDispatch()

    useEffect(() => { dispatch(getCustomersAction()) }, [pages, JSON.stringify(customers)])


    const handleChangeSeller = (event) => {
        setSellerId(event.target.value);
        const selectedSeller = sellers?.find(s => s._id === sellerId)
        setSeller(selectedSeller)

    }


    const handleIsPrivacy = (event) => {
        setIsPrivacy(event.target.checked);
    };


    const handleIsCompliance = (event) => {
        setIsCompliance(event.target.checked);
    };


    const addNewCustomer = (newCustomer) => {
        dispatch(addNewCustomerAction(newCustomer))
        setOpen(!open)
        alert("New Customer correctly added!")
    }

    return (
        <div>
            <div style={{ color: 'gray' }} >
                <div className='d-flex justify-content-between mt-md-5 '>
                    <h2 className='ml-md-2'>CUSTOMERS LIST</h2>
                    <div className='d-flex'>

                        {/* ================= search section */}
                        <InputGroup className="mb-3 search">
                            <Form.Group >
                                <Form.Control className="search" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                            </Form.Group>
                        </InputGroup>
                    </div>

                    <div>
                        {/* =========== add customer section */}
                        <ThemeProvider theme={theme}>
                            <Button className='mr-md-3' color="neutral" variant="contained" size="large" endIcon={<AddCircleOutlineIcon />}
                                onClick={handleOpen}>New Customer</Button>
                        </ThemeProvider>
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


                                            <FormControl sx={{ m: 1, minWidth: 100 }}>
                                                <InputLabel id="demo-simple-select-label">Seller</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={seller}
                                                    label="Seller"
                                                    onChange={
                                                        handleChangeSeller}
                                                >
                                                    {
                                                        sellers?.map(s =>
                                                            <MenuItem key={s._id} value={s._id}>{s.last_name.toUpperCase()}</MenuItem>
                                                        )}
                                                </Select>
                                            </FormControl>



                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Name"
                                                value={name.toUpperCase()}
                                                onChange={(e) => setName(e.target.value)}
                                            />

                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="Last name"
                                                value={lastname.toUpperCase()}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                    <DesktopDatePicker
                                                        label="Birth Date"
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </Stack>
                                            </LocalizationProvider>
                                            <FormControl sx={{ m: 1, minWidth: 100 }}>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={gender}
                                                    label="Gender"
                                                    onChange={
                                                        (e) => setGender(e.target.value)}
                                                >
                                                    {
                                                        generalGender?.map(g =>
                                                            <MenuItem key={g.index} value={g}>{g}</MenuItem>
                                                        )}
                                                </Select>
                                            </FormControl>


                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="userName"
                                                value={userName.toUpperCase()}
                                                onChange={(e) => setUserName(e.target.value)}
                                            />


                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="password"
                                                type='password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />

                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="email"
                                                value={email.toUpperCase()}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />


                                            <FormControl sx={{ m: 1, minWidth: 100 }}>
                                                <InputLabel id="demo-simple-select-label">Marital</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={marital}
                                                    label="Marital"
                                                    onChange={
                                                        (e) => setMarital(e.target.value)}
                                                >
                                                    {
                                                        generalMarital?.map(g =>
                                                            <MenuItem key={g.index} value={g}>{g}</MenuItem>
                                                        )}
                                                </Select>
                                            </FormControl>


                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="surgery"
                                                value={healt.surgery}
                                                onChange={(e) => {
                                                    setHealt({ surgery: e.target.value })
                                                    setIsHealt(true)
                                                }}
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
                                    <ThemeProvider theme={theme}>
                                        <Button className='ml-4 px-5' color="neutral" variant="contained" size="large" endIcon={<AddCircleOutlineIcon />} onClick={() => { addNewCustomer(newCustomer) }}>SEND</Button>
                                    </ThemeProvider>
                                </Typography>

                            </Box>
                        </Modal>
                    </div>
                </div >
            </div >


            <Table responsive striped bordered hover variant="light" className='mt-md-4'>
                <thead style={{ fontSize: '1rem' }}>
                    <tr>
                        <th>Seller <i className="bi bi-arrow-down-up"></i></th>
                        <th>Name <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Last Name <i className="bi bi-arrow-down-up"></i></th>

                        <th>Gender <i className="bi bi-arrow-down-up"></i></th>

                        <th>email <i className="bi bi-arrow-down-up"></i></th>
                        <th>Age <i className="bi bi-arrow-down-up"></i></th>
                        <th>Privacy <i className="bi bi-arrow-down-up"></i></th>
                        <th>Compliance <i className="bi bi-arrow-down-up"></i></th>
                    </tr>
                </thead>
                <tbody>{search ?
                    customers.customer?.filter(c => c.name.toLowerCase().includes(search.toLowerCase())
                        || c.last_name.toLowerCase().includes(search.toLowerCase())
                        || c.seller[0].last_name.toLowerCase().includes(search.toLowerCase())
                    ).map(u =>
                        <tr key={u._id} style={{ cursor: 'pointer', fontSize: '1rem' }}>
                            <SingleCustomer customer={u} />
                        </tr>)
                    :
                    customers.customer?.map(u =>
                        <tr key={u._id} style={{ cursor: 'pointer', fontSize: '1rem' }}>
                            <SingleCustomer customer={u} />
                        </tr>
                    )}
                </tbody>
            </Table>
            {customers?.total !== 1 ?
                <>
                    <FirstPageIcon onClick={() => setPages(customers?.links.first)} />
                    <ChevronLeftIcon onClick={() => setPages(customers?.links.prev)} />
                    <ChevronRightIcon onClick={() => setPages(customers?.links.next)} />
                    <LastPageIcon onClick={() => setPages(customers?.links.last)} />
                </> : ''
            }
        </div >
    )
}

export default Customers