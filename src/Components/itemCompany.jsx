import React from 'react'
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCompanyAction } from '../redux/action/index'


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


const SingleCompany = ({ company }) => {

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //  DISPATCH DELETE COMPANY
    const dispatch = useDispatch()

    const navigate = useNavigate();

    return (<>


        <td onClick={() => navigate('/companies/' + company._id)}>{company.name}</td>
        <td onClick={() => navigate('/companies/' + company._id)}>Alan</td>
        <td onClick={() => navigate('/companies/' + company._id)}>{company.email}</td>
        {
            company.email ?
                <td style={{ color: 'green' }}> OK</td> : <td style={{ color: 'red' }} > NO</td>
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
                    DELETING COMPANY
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    You are deleting a customer. If you confirm, press the button.
                </Typography>
                <Button variant="outlined" onClick={() => dispatch(deleteCompanyAction())}>DELETE</Button>
            </Box>
        </Modal>
    </>
    )
}

export default SingleCompany