import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleCompany from '../Components/itemCompany'
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
import { addNewCompanyAction } from '../redux/action'


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



const Companies = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const newCompany = {
        name: name,
        email: email,
    }



    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const companies = useSelector((state) => state.companies.companies)

    console.log('id company from redux', companies[0]._id)

    console.log('newCompany', newCompany)

    const addNewCompany = (newCompany) => {

        dispatch(addNewCompanyAction(newCompany))

        setOpen(false)
    }


    return (
        <div>
            <div style={{ color: 'gray' }} >
                <div className='d-flex'>

                    {/* ================= search section */}

                    {/* <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="list"
                                control={<Switch color="primary" />}
                                label="list"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl> */}

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
                    <Button onClick={handleOpen}>Add Company</Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add a new Company
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
                                            label="email"
                                            // defaultValue="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </Box>
                            </div>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You are adding a new customer.
                            </Typography>

                            <Button variant="outlined" onClick={() => { addNewCompany(newCompany) }}>Add</Button>
                        </Box>
                    </Modal>


                </div>
            </div>


            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME <i className="bi bi-arrow-down-up"></i>
                        </th>
                        <th>OWNER <i className="bi bi-arrow-down-up"></i></th>
                        <th>MAIL ADDRESS<i className="bi bi-arrow-down-up"></i></th>
                        <th>ACTIVE <i className="bi bi-arrow-down-up"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {companies?.map(c =>
                        <tr key={c._id} style={{ cursor: 'pointer' }}>
                            <SingleCompany company={c} />
                        </tr>
                    )}
                </tbody>
            </Table>

        </div >
    )
}

export default Companies