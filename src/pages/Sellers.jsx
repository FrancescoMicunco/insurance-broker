import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleSeller from '../Components/ItemSeller'
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
import { addNewSellersAction } from '../redux/action'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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



const Sellers = () => {

    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = useState('')

    const newSeller = {
        name: name,
        last_name: last_name
    }



    // MODAL

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const dispatch = useDispatch()

    const sellers = useSelector((state) => state.sellers?.sellers)

    console.log('sellers from redux', sellers)

    console.log('newSeller', newSeller)

    const addnewSeller = (newSeller) => {

        dispatch(addNewSellersAction(newSeller))

        setOpen(false)
    }


    return (
        <div>
            <div style={{ color: 'gray' }} >
                <div className='d-flex justify-content-around m-md-3'>
                    <h2>SELLERS LIST</h2>
                    {/* ================= search section */}

                    <div className='d-flex'>
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
                        <Button variant="contained" size="small" endIcon={<AddCircleOutlineIcon />} onClick={handleOpen}>New Agent</Button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Add a new Seller
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
                                                label="Last Name"
                                                // defaultValue="Last Name"
                                                value={last_name}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />


                                        </div>
                                    </Box>
                                </div>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    You are adding a new contract.
                                </Typography>

                                <Button variant="outlined" onClick={() => { addnewSeller(newSeller) }}>Add</Button>
                            </Box>
                        </Modal>

                    </div>
                </div>
            </div>


            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>Last Name <i className="bi bi-arrow-down-up"></i></th>

                    </tr>
                </thead>
                <tbody>
                    {sellers?.map(s =>
                        <tr key={s._id} style={{ cursor: 'pointer' }}>
                            <SingleSeller seller={s} />
                        </tr>
                    )}
                </tbody>
            </Table>

        </div >
    )
}

export default Sellers