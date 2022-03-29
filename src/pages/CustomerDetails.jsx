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
import { deleteCustomerAction, updateCustomerAction } from '../redux/action/index'
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

    const [customerId, setCustomerId] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [customerDetail, setCustomerDetail] = useState(undefined)
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [seller, setSeller] = useState('')
    const [sellerId, setSellerId] = useState('')
    const [userName, setUserName] = useState('')
    const [isPrivacy, setIsPrivacy] = useState(false)
    const [isCompliance, setIsCompliance] = useState(false)

    const customerToUpdate = {

        name: name,
        last_name: lastname,
        password: password,
        email: email,
        userName: userName,
        seller: sellerId,
        isPrivacy: isPrivacy,
        isCompliance: isCompliance
    }

    console.log("to update", customerToUpdate)

    const params = useParams()

    const handleToUpdate = () => {
        setIsUpdate(true)
    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()

    const customer = useSelector((state) => state.customers?.customers.customer)


    const products = useSelector((state) => state.products?.products)


    useEffect(() => {

        let customerId = params.customerId

        let cToShow = customer?.find(c => c._id.toString() === customerId)

        if (cToShow) setCustomerDetail(cToShow)

        console.log("customer to show", customerDetail)

    }, [customerDetail])




    return (
        <div className="customerDet" style={{ color: 'gray' }}>
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
                                defaultValue={customerDetail?.name}
                                // value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Last name"
                                defaultValue={customerDetail?.name}
                                // value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <TextField
                                required
                                id="outlined-disabled"
                                label="email"
                                defaultValue={customerDetail?.email}
                                // value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button variant="outlined"
                                onClick={() => {
                                    dispatch(updateCustomerAction(customerToUpdate, customerDetail?._id))
                                }}>Update</Button>
                        </div>
                    </Box> :
                    <div className='container-fluid mainDetails'>
                        <h3 className='pageTitle'>CUSTOMER DETAIL</h3>
                        <div className='detailBody'>
                            <div className='d-flex justify-content-around'>
                                <p>Role:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.role}</span></p>

                            </div>
                            <div>
                                <p>Full name:   <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.name} {customerDetail?.last_name}</span>  Email:<span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.email} </span></p>
                                <p>Seller:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.seller[0]?.name} {customerDetail?.seller[0].last_name} </span>  Gender:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.gender}</span></p>
                                <p>Birth:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.birth_date}</span>     Username:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{customerDetail?.userName}</span></p>
                            </div>

                            <div className='d-flex justify-content-around'>
                                <p>Marital:  <span style={{ color: '#1976d2', fontWeight: 'bold', paddingRight: '1rem' }}>{customerDetail?.marital}  </span> </p>

                                {customerDetail?.healt?.surgery ? <p>Healt:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>
                                    Surgery: Yes </span></p>
                                    : <p>Healt:  <span style={{ color: '#1976d2', fontWeight: 'bold' }}>
                                        Surgery: NO </span></p>
                                }
                                {customerDetail?.isPrivacy ? <p>Privacy:  OK</p> : <p></p>}
                            </div>
                        </div>
                    </div >
                }

            </div>
            <div>
                <Stack spacing={2} direction="row">
                    {
                        isUpdate ? '' :
                            <div className="container-fluid">
                                <Button variant="outlined" onClick={handleToUpdate}>Update</Button>
                                <Button variant="contained" onClick={handleOpen}>Delete</Button>
                            </div>
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
                            <Button variant="outlined" onClick={() =>
                                dispatch(deleteCustomerAction(customerDetail?._id))
                            }

                            > DELETE</Button>
                        </Box>
                    </Modal>
                </Stack>
            </div>
        </div >
    )
}

export default CustomerDetails
