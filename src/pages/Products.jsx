import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleProduct from '../Components/ItemProduct'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Table } from 'react-bootstrap'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { addNewProductAction, getProductsAction } from '../redux/action'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import LastPageIcon from '@mui/icons-material/LastPage';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import DateAdapter from '@mui/lab/AdapterDateFns';


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



const Products = () => {
    const [productName, setProductName] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [number, setNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [rebate, setRebate] = useState('0')
    const [expire, setExpire] = useState('')
    const [search, setSearch] = useState('')
    const [open, setOpen] = React.useState(false);
    const [sellerId, setSellerId] = useState('')
    const [pages, setPages] = useState('')
    const [isNewProduct, setIsNewProduct] = useState('')
    const [value, setValue] = React.useState(new Date());


    const handleChange = (newValue) => {
        setValue(newValue);
    };


    const newProduct = {
        number: number,
        productName: productName,
        customer: customerId,
        amount: amount,
        endDate: value,
        rebate: rebate
    }

    // MODAL

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeCustomer = (event) => {
        console.log("event customer", event)
        setCustomerId(event.target.value);
    };



    const dispatch = useDispatch()

    useEffect(() => { dispatch(getProductsAction(pages)) }, [pages, isNewProduct])

    const products = useSelector((state) => state.products?.products)
    console.log("products from redux", products)


    const seller = useSelector((state) => state.sellers?.sellers)
    const customer = useSelector((state) => state.customers?.customers.customer)


    const addnewProduct = (newProduct) => {
        dispatch(addNewProductAction(newProduct))
        setOpen(false)
    }


    return (
        <div >
            <div style={{ color: 'gray' }} >
                <div className='d-flex justify-content-around m-md-3 '>

                    <h2>PRODUCTS LIST</h2>

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

                    {/* =========== add customer section */}
                    <div>


                        <Button variant="contained" size="small" endIcon={<AddCircleOutlineIcon />} onClick={handleOpen}>Add New Contract</Button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Add a new Contract
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

                                            {/* Customer Name */}
                                            <FormControl style={{ width: '40%', paddingRight: '5%', marginLeft: '0.5%', marginTop: '0.5%' }}>
                                                <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={customerId}
                                                    label="Customer"
                                                    onChange={handleChangeCustomer}
                                                >
                                                    {customer?.map(c =>
                                                        <MenuItem key={c._id} value={c._id}>{c.name} {c.last_name}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>


                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Number"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                            />


                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Name"
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                            />


                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="amount € __.__"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />

                                            <TextField
                                                required
                                                id="outlined-disabled"
                                                label="rebate %"
                                                value={rebate}
                                                onChange={(e) => setRebate(e.target.value)}
                                            />


                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                    <DesktopDatePicker
                                                        label="Date"
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </Stack>
                                            </LocalizationProvider>
                                        </div>
                                    </Box>
                                </div>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    You are adding a new contract.
                                </Typography>

                                <Button variant="contained" size="small" endIcon={<AddCircleOutlineIcon />} onClick={() => { addnewProduct(newProduct) }}>Add</Button>
                            </Box>
                        </Modal>


                    </div>
                </div>
            </div>
            {products?.total !== 1 ?
                <>
                    <FirstPageIcon onClick={() => setPages(products?.links.first)} />
                    <ChevronLeftIcon onClick={() => setPages(products?.links.prev)} />
                    <ChevronRightIcon onClick={() => setPages(products?.links.next)} />
                    <LastPageIcon onClick={() => setPages(products?.links.last)} />
                </> : ''
            }



            <Table responsive striped bordered hover variant="dark" className='mt-md-4'>
                <thead>
                    <tr>
                        <th>Number <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Name <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Amount <i className="bi bi-arrow-down-up"></i></th>
                        <th>Seller <i className="bi bi-arrow-down-up"></i></th>
                        <th>Customer <i className="bi bi-arrow-down-up"></i></th>
                        <th>Expiring Date <i className="bi bi-arrow-down-up"></i></th>
                        <th>Rebate <i className="bi bi-arrow-down-up"></i></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.product?.map(p =>
                        <tr key={p._id} style={{ cursor: 'pointer' }}>
                            <SingleProduct product={p} />
                        </tr>
                    )}
                </tbody>
            </Table>

        </div >
    )
}

export default Products