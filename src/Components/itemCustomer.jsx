import React from 'react'
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCustomerAction, getCustomersAction } from '../redux/action/index'
import { useState, useEffect } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Moment from "react-moment"


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


const SingleCustomer = ({ customer }) => {

    // MODAL
    const [open, setOpen] = React.useState(false);
    const [pages, setPages] = useState('customers?limit=5&offset=5')
    const [deleteCustomer, setDeleteCustomer] = useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const customers = useSelector((state) => state.customers?.customers)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    useEffect(() => { dispatch(getCustomersAction(pages)) }, [pages, JSON.stringify(customers)])

    const dateFormatted = customer.birth_date.slice(0, -14)

    return (<>

        <td className='tabItem' onClick={() => navigate('/customers/' + customer?._id)}>{customer.seller[0]?.name} {customer.seller[0]?.last_name}</td>
        <td className='tabItem' onClick={() => navigate('/customers/' + customer?._id)}>{customer.name}</td>
        <td className='tabItem' onClick={() => navigate('/customers/' + customer?._id)}>{customer.last_name}</td>
        <td className='tabItem' onClick={() => navigate('/customers/' + customer?._id)}>{customer.gender}</td>
        <td className='tabItem' onClick={() => navigate('/customers/' + customer?._id)}>{customer.email}</td>
        <td className='tabItem' onClick={() => navigate('/customers/' + customer?._id)}>
            <Moment fromNow ago>{dateFormatted}</Moment>
        </td>

        {
            customer.isPrivacy ?
                <td className='tdGreen' ><CheckIcon /></td> : <td className='tdRed' > <CloseIcon /></td>
        }
        {
            customer.isCompliance ?
                <td className='tdGreen' > <CheckIcon /> </td> : <td className='tdRed' > <CloseIcon /> </td>
        }


        <td className='tabItem' onClick={handleOpen}><i className="bi bi-person-x"> </i></td>

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
                <Button variant="outlined"
                    onClick={() => {
                        dispatch(deleteCustomerAction(customer?._id));
                        setOpen(false);
                        setDeleteCustomer(customer?._id)
                    }

                    }>DELETE</Button>
            </Box>
        </Modal>
    </>
    )
}

export default SingleCustomer
