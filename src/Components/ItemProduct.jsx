import React from 'react'
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { deleteProductAction } from '../redux/action/index'
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


const SingleProduct = ({ product }) => {

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const seller = useSelector((state) => state.sellers?.sellers)

    const sellerToShow = seller.find(s => s._id === product?.customer[0]?.seller[0])




    //  DISPATCH DELETE PRODUCT
    const dispatch = useDispatch()

    const navigate = useNavigate();



    return (<>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>{product?.number}</td>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>{product?.productName}</td>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>{product?.amount}</td>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>{sellerToShow?.name}  {sellerToShow?.last_name}</td>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>{product?.customer[0]?.name}  {product?.customer[0]?.last_name}</td>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>
            <Moment local="it" format="DD/MM/YYYY">{product?.endDate}</Moment></td>
        <td className='tabItem' onClick={() => navigate('/products/' + product?._id)}>{product?.rebate}</td>
        <td className='tabItem' onClick={handleOpen}><i className="bi bi-person-x"> </i></td>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    DELETING PRODUCT
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    You are deleting a product. If you confirm, press the button.
                </Typography>
                <Button variant="outlined" onClick={() => dispatch(deleteProductAction(product?._id))}>DELETE</Button>
            </Box>
        </Modal>
    </>
    )
}

export default SingleProduct
