import * as React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';

import Typography from '@mui/material/Typography';
import { useAuth0 } from '@auth0/auth0-react';



const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const AddPropertyModal = ({ opened, setOpened, onModalClose }) => {

    const { user } = useAuth0()

    const [propertyDetails, setPropertyDetails] = React.useState({
        title: '',
        description: '',
        country: '',
        city: '',
        address: '',
        image: null,
        facilities: {
            bedrooms: 0,
            parkings: 0,
            bathrooms: 0,
        }, userEmail: user?.email
    })



    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={opened}
                onClose={onModalClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        onModalClose();
                    },
                }}

            >
                <DialogTitle>List New Property</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form to list a new property
                    </DialogContentText>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        required
                        margin='normal'
                        fullWidth
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                    />
                    
                    <div className='flex justify-start items-center gap-8'>
                        <TextField

                            autoFocus
                            required
                            margin="normal"
                            id="email"
                            name="email"
                            label="Address"
                            type="text"

                            variant="standard"
                        />
                        <TextField

                            autoFocus
                            required
                            margin="normal"
                            id="email"
                            name="email"
                            label="City"
                            type="text"

                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="normal"
                            id="email"
                            name="email"
                            label="country"
                            type="text"

                            variant="standard"
                        />

                    </div>
                    
                    



                </DialogContent>

                <DialogActions>
                    <Button onClick={onModalClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default AddPropertyModal