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


function SellerDetails() {

    const seller = useSelector((state) => state.sellers?.sellers)
    console.log("seller", seller)

    const params = useParams()

    let sellerId = params.sellerId
    console.log("seller Id", sellerId)

    let sellerToShow = seller?.find(s => s._id.toString() === sellerId)
    console.log("seller to show", sellerToShow)


    return (
        <div className='container-fluid mainDetails'>
            <h2 className='my-md-5'>SELLER DETAIL</h2>
            <div className='detailBody'>
                <p>Seller name:   <span >{sellerToShow?.name} </span></p>
                <p>Seller Last Name:  <span >{sellerToShow?.last_name} </span></p>

            </div>


        </div>
    )
}

export default SellerDetails