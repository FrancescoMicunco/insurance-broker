import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function FormPropsTextFields() {


    return (
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
                    label="Required"
                    defaultValue="Name"
                />
                <TextField
                    required
                    id="outlined-disabled"
                    label="Required"
                    defaultValue="Last Name"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    required
                    id="outlined-disabled"
                    label="Required"
                    defaultValue="email"
                />
            </div>
        </Box>
    );
}
