import React from 'react'
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCustomerAction } from '../redux/action/index'


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

    console.log("this customer", customer)
    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //  DISPATCH DELETE CUSTOMER
    const dispatch = useDispatch()

    const navigate = useNavigate();

    return (<>

        <td ></td>
        <td onClick={() => navigate('/customers/' + customer._id)}>{customer.name}</td>
        <td onClick={() => navigate('/customers/' + customer._id)}>{customer.last_name}</td>
        <td onClick={() => navigate('/customers/' + customer._id)}>{customer.seller[0]?.name}</td>
        <td onClick={() => navigate('/customers/' + customer._id)}>{customer.email}</td>
        {
            customer.isPrivacy ?
                <td className='tdGreen' > OK</td> : <td className='tdRed' > NO</td>
        }
        {
            customer.isCompliance ?
                <td className='tdGreen' > OK</td> : <td className='tdRed' > NO</td>
        }


        <td onClick={handleOpen}><i className="bi bi-person-x"> </i></td>
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
                <Button variant="outlined" onClick={() => dispatch(deleteCustomerAction(customer?._id))}>DELETE</Button>
            </Box>
        </Modal>
    </>
    )
}

export default SingleCustomer
