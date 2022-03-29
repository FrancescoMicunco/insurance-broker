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
import { deleteProductAction, updateProductAction } from '../redux/action/index'
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


function ProductDetails() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [seller, setSeller] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [productDetails, setProductDetails] = useState('')


    const productToUpdate = {
        number: number,
        name: name,
        seller: seller,
        customer: customerId,
    }

    console.log("to update", productToUpdate)

    const handleToUpdate = () => {
        setIsUpdate(true)
    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()


    const products = useSelector((state) => state.products?.products)
    console.log("products from pro details", products)

    const params = useParams()


    useEffect(() => {

        let productId = params.productId

        let pToShow = products?.product?.find(c => c._id.toString() === productId)

        console.log("pToShow", pToShow)

        console.log("customer buyer", pToShow?.customer[0].name)

        if (pToShow) setProductDetails(pToShow)

        console.log("products to show", productDetails)

    }, [productDetails])




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
                                defaultValue={productDetails?.name}
                                // value={name}
                                onChange={(e) => setName(e.target.value)}
                            />


                            <Button variant="outlined"
                                onClick={() => {
                                    dispatch(updateProductAction(productToUpdate, productDetails?._id))
                                }}>Update</Button>
                        </div>
                    </Box> :
                    <div className='container-fluid mainDetails'>
                        <h2 className='pageTitle'>PRODUCT DETAIL</h2>
                        <div className='detailBody'>
                            <p>Product name:   <span style={{ color: 'black' }}>{productDetails?.productName} </span></p>
                            <p>Customer:  <span style={{ color: 'black' }}>{productDetails?.customer[0]?.name}  {productDetails?.customer[0]?.last_name}</span></p>
                            {/* <p>Seller:  <span style={{ color: 'black' }}>{productDetails?.seller[0]} {productDetails?.seller[0].last_name}</span></p> */}
                            <p>Amount: <span style={{ color: 'black' }}>{productDetails?.amount} </span></p>
                        </div>


                    </div>

                }
            </div>

            <div>
                <Stack spacing={2} direction="row">
                    {
                        isUpdate ? '' :
                            <div className="container-fluid">
                                <Button variant="outlined" onClick={() => handleToUpdate()}>Update</Button>
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
                                DELETING PRODUCT
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You are deleting a product. If you confirm, press the button.
                            </Typography>
                            <Button variant="outlined" onClick={() => dispatch(deleteProductAction(productDetails?._id))}>DELETE</Button>
                        </Box>
                    </Modal>
                </Stack></div>
        </div>
    )
}

export default ProductDetails
