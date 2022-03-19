import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleProduct from '../Components/ItemProduct'
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
import { addNewProductAction } from '../redux/action'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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

    const [name, setName] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [sellerId, setSellerId] = useState('')


    const newProduct = {
        name: name,
        customerId: customerId
    }



    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products?.products)

    console.log('products from redux', products)

    console.log('newProduct', newProduct)

    const addnewProduct = (newProduct) => {

        dispatch(addNewProductAction(newProduct))

        setOpen(false)
    }


    return (
        <div>
            <div style={{ color: 'gray' }} >
                <div className='d-flex'>

                    {/* ================= search section */}
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

                    {/* =========== add customer section */}
                    <Button onClick={handleOpen}>Add New Contract</Button>

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
                                            // defaultValue="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            id="outlined-disabled"
                                            label="Customer"
                                            // defaultValue="Last Name"
                                            value={customerId}
                                            onChange={(e) => setCustomerId(e.target.value)}
                                        />

                                        <TextField
                                            required
                                            id="outlined-disabled"
                                            label="email"
                                            // defaultValue="email"
                                            value={sellerId}
                                            onChange={(e) => setSellerId(e.target.value)}
                                        />
                                    </div>
                                </Box>
                            </div>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You are adding a new contract.
                            </Typography>

                            <Button variant="outlined" onClick={() => { addnewProduct(newProduct) }}>Add</Button>
                        </Box>
                    </Modal>


                </div>
            </div>


            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Seller <i className="bi bi-arrow-down-up"></i></th>
                        <th>Customer <i className="bi bi-arrow-down-up"></i></th>
                        <th>Amount <i className="bi bi-arrow-down-up"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(p =>
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