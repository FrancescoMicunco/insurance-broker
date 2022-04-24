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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Moment from "react-moment"
import 'moment/locale/it';

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
    const [healt, setHealt] = useState({ surgery: "false", medicine: "false" })
    const [isHealt, setIsHealt] = useState(false)
    const [marital, setMarital] = useState('')

    const customerToUpdate = {
        name: name ? name : customerDetail?.name,
        last_name: lastname ? lastname : customerDetail?.last_name,
        userName: userName ? userName : customerDetail?.userName,
        // password: password ? password : customerDetail?.password,
        email: email ? email : customerDetail?.email,
        healt: healt ? healt : customerDetail?.healt,
        marital: marital ? marital : customerDetail?.marital,
        isHealt: isHealt ? isHealt : customerDetail?.isHealt,
        // seller: sellerId ? sellerId : customerDetail?.sellerId,
        isPrivacy: isPrivacy ? isPrivacy : customerDetail?.isPrivacy,
        isCompliance: isCompliance ? isCompliance : customerDetail?.isCompliance,
    }

    console.log("to update", customerToUpdate)



    const handleToUpdate = () => {
        setIsUpdate(true)
    }

    const handleIsPrivacy = (event) => {
        setIsPrivacy(event.target.checked);
    };

    const handleIsCompliance = (event) => {
        setIsCompliance(event.target.checked);
    };

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const params = useParams()

    const dispatch = useDispatch()

    const customer = useSelector((state) => state.customers?.customers.customer)


    const products = useSelector((state) => state.products?.products)

    const deleteCustomer = () => {
        dispatch(deleteCustomerAction(customerDetail?._id));
        alert("Customer deleted!")
        handleClose()
    }

    useEffect(() => {
        let customerId = params.customerId
        let cToShow = customer?.find(c => c._id.toString() === customerId)
        if (cToShow) setCustomerDetail(cToShow)
    }, [JSON.stringify(customer)])




    return (
        <div className="customerDet" style={{ color: 'gray' }}>

            <div className="d-flex mt-5">
                {isUpdate ?
                    <>
                        <h2 className='my-md-4' style={{ textAlign: 'left' }}>CUSTOMER UPDATE</h2>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='d-flex flex-column align-item-center updatemodal' style={{ marginLeft: '20%' }}>
                                <div className='mb-md-4'>

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Name"
                                        defaultValue={customerDetail?.name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-disabled"
                                        label="Last name"
                                        defaultValue={customerDetail?.last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />

                                    <TextField
                                        required
                                        id="outlined-disabled"
                                        label="email"
                                        defaultValue={customerDetail?.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>

                                    <TextField
                                        required
                                        id="outlined-disabled"
                                        label="Marital"
                                        defaultValue={customerDetail?.marital}
                                        onChange={(e) => setMarital(e.target.value)}
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
                                <Button variant="outlined"
                                    onClick={() => {
                                        dispatch(updateCustomerAction(customerToUpdate, customerDetail?._id));
                                        setIsUpdate(false)
                                    }}>Update</Button>
                            </div>
                        </Box>
                    </>
                    :
                    <div className='container-fluid mainDetails'>
                        <h2 className='ml-md-2 my-md-4'>CUSTOMER DETAIL</h2>
                        <div className='detailBody'>
                            <div className='d-flex justify-content-start'>
                                <p>Role:  <span>{customerDetail?.role}</span></p>

                            </div>
                            <div>
                                <p>Full name:   <span >{customerDetail?.name} {customerDetail?.last_name}</span>       Email:<span >{customerDetail?.email} </span></p>
                                <p>Seller:  <span >{customerDetail?.seller[0]?.name} {customerDetail?.seller[0].last_name} </span>  Gender:  <span >{customerDetail?.gender}</span></p>
                                <p>Birth:  <span >
                                    <Moment local="it" format="DD/MM/YYYY">{customerDetail?.birth_date}</Moment>
                                </span>     Username:  <span >{customerDetail?.userName}</span></p>
                            </div>

                            <div className='d-flex '>
                                <p>Marital:  <span style={{ paddingRight: '1rem' }}>{customerDetail?.marital}  </span> </p>

                                {customerDetail?.healt?.surgery ? <p>Healt:  <span >
                                    Surgery: Yes </span></p>
                                    :
                                    <p>Healt:  <span>
                                        Surgery: NO </span></p>
                                }
                                {customerDetail?.isPrivacy ? <p className='ml-4' style={{ fontWeight: 'bold' }}>Privacy:  OK</p> : <p></p>}
                            </div>
                        </div>
                    </div >
                }

            </div>
            <div>
                <Stack spacing={2} direction="row">
                    {
                        isUpdate ? ''
                            :
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
                            <Button variant="outlined" onClick={deleteCustomer
                                // () =>
                                // dispatch(deleteCustomerAction(customerDetail?._id)
                                // )
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
