import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../style/customerdetails.css'
import React from 'react'
import { deleteCompanyAction, updateCompanyAction } from '../redux/action/index'
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

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',

        },
        neutral: {
            main: '#ac319d',
            contrastText: '#fff',
        },
    },
});


function CompanyDetails() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [companyDetail, setCompanyDetail] = useState(undefined)


    const companyToUpdate = {
        id: companyId,
        name: name,
        email: email
    }

    console.log("to update", companyToUpdate)

    const handleToUpdate = () => {
        setIsUpdate(true)

    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()



    const company = useSelector((state) => state.companies.companies)

    console.log("this is company from detail", company)

    const params = useParams()



    useEffect(() => {
        let companyId = params.companyId
        let cToShow = company?.find(c => c._id.toString() === companyId)
        console.log("cToShow", cToShow)
        if (cToShow) setCompanyDetail(cToShow)
        console.log("company to show", companyDetail)

    }, [companyDetail])




    return (
        <div className="companiesDet" style={{ color: 'gray' }}>
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
                                defaultValue={companyDetail?.name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <TextField
                                required
                                id="outlined-disabled"
                                label="email"
                                defaultValue={companyDetail?.email}
                                // value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button variant="outlined"
                                onClick={() => {
                                    dispatch(updateCompanyAction(companyToUpdate, companyDetail?._id))
                                }}>Update</Button>
                        </div>
                    </Box> :
                    <div className='container-fluid mainDetails'>
                        <h2 className='my-md-4'>COMPANY DETAIL</h2>
                        <div className='detailBody '>
                            <p>Company name:   <span >{companyDetail?.name} </span></p>
                            <p>Email:  <span >{companyDetail?.email}</span></p>

                        </div>
                    </div>

                }


            </div>

            <div>
                <Stack spacing={2} direction="row">
                    {
                        isUpdate ? '' :
                            <div className="container-fluid" >
                                <ThemeProvider theme={theme}>
                                    <Button onClick={() => handleToUpdate()}>Update</Button>
                                    <Button variant="contained" onClick={handleOpen}>Delete</Button>
                                </ThemeProvider>
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
                                DELETING COMPANY
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You are deleting a company. If you confirm, press the button.
                            </Typography>
                            <Button variant="outlined" onClick={() => dispatch(deleteCompanyAction(companyDetail?._id))}>DELETE</Button>
                        </Box>
                    </Modal>
                </Stack></div>
        </div>
    )
}

export default CompanyDetails