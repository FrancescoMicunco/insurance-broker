import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../style/customerdetails.css'
import React from 'react'
import { deleteCustomerAction } from '../redux/action/index'
import TextField from '@mui/material/TextField';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function CustomerDetails() {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)

    const customerToUpdate = {
        name: name,
        lastname: lastname,
        email: email
    }

    const handleToUpdate = () => {
        setIsUpdate(true)

    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()

    const [customerDetail, setCustomerDetail] = useState(undefined)

    const customers = useSelector((state) => state.customers)


    const params = useParams()


    useEffect(() => {

        let customerId = params.customerId

        console.log('id', customerId)

        let cToShow = customers?.find(c => c._id.toString() === customerId)

        console.log("cToShow", cToShow)

        if (cToShow) setCustomerDetail(cToShow)

        console.log("customer to show", customerDetail)

    }, [customerDetail])

    return (
        <div className="customerDet">
            <div className="d-flex">
                {isUpdate ?

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
                                label="Last name"
                                // defaultValue="Last Name"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <TextField
                                required
                                id="outlined-disabled"
                                label="email"
                                // defaultValue="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button variant="outlined" onClick={() => alert("to update!")}>Update</Button>
                        </div>
                    </Box> :
                    <>
                        <h3>{customerDetail?.name}</h3>
                        <p>{customerDetail?.email}</p>
                    </>
                }


            </div>

            <div>
                <Stack spacing={2} direction="row">
                    {
                        isUpdate ? '' :
                            <>

                                <Button variant="outlined" onClick={() => handleToUpdate()}>Update</Button>
                                <Button variant="outlined" onClick={handleOpen}>Delete</Button>
                            </>

                    }

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                DELETING CUSTOMER
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You are deleting a customer. If you confirm, press the button.
                            </Typography>
                            <Button variant="outlined" onClick={() => dispatch(deleteCustomerAction(customerDetail?._id))}>DELETE</Button>
                        </Box>
                    </Modal>
                </Stack></div>
        </div>
    )
}

export default CustomerDetails
