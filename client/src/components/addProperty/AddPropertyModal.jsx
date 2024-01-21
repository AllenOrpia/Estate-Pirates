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
import Map from '../../components/map/Map.jsx';
import axios from 'axios';
import UserDetailContext from '../../context/userDetailsContext.js'
import { toast } from 'react-toastify';




const countries = [
    'United States',
    'Spain',
    'Canada',
    'Japan',
    'Indonesia',
    'China',
    'South Korea',
    'Phillippines',
    'Vietnam',
    'Taiwan',
    'United Kingdom',
    'France'
]

const AddPropertyModal = ({ opened, setOpened, onModalClose }) => {

    const { user } = useAuth0();
    const userEmail = user?.email
    const { userDetails: { token }, setUserDetails } = React.useContext(UserDetailContext)




    const [propertyDetails, setPropertyDetails] = React.useState({
        title: '',
        description: '',
        country: '',
        city: '',
        address: '',
        image: null,

        bedrooms: 0,
        parking: 0,
        bathrooms: 0,
    });

    const handleChange = (e) => {
        
        setPropertyDetails((currProperty) => {
            return {
                ...currProperty, [e.target.name]: e.target.value
            }
        })
    };

    



    const handleFile = async (e) => {
        const file = event.target.files[0]
        const imageData = new FormData();
        imageData.append('file', file)
        imageData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOADPRESET)
        await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUDNAME}/image/upload`, imageData)
            .then((res) => {
                console.log(res)
                setPropertyDetails((currProperty) => {
                    return { ...currProperty, image: res.data.secure_url }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const preset_key = ''
    const cloud_name = ''




    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xl');

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

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={opened}
                onClose={onModalClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();

                        const newData = { ...propertyDetails, price: parseInt(propertyDetails.price) }



                        try {
                            axios.post("http://localhost:3000/api/property/create", {
                                ...newData, userEmail
                            }, {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                }
                            })
                                .then((res) => {
                                    toast.success(res.data.message)
                                })
                                .catch((err) => {
                                    toast.error(err.response.data.message)
                                    console.log(err)

                                })
                        } catch (err) {
                            toast.error('Error while creating property, please try again')
                            throw err
                        }








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
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        margin='normal'
                        fullWidth
                        id="description"
                        name='description'
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                        onChange={handleChange}
                    />

                    <TextField
                        onChange={handleChange}
                        autoFocus
                        required
                        margin="normal"
                        id="price"
                        name="price"
                        label="Price"
                        type="number"


                        variant="standard"
                    />

                    <div className='flex justify-start items-center gap-8'>
                        <TextField
                            onChange={handleChange}
                            autoFocus
                            required
                            margin="normal"
                            id="bedrooms"
                            name="bedrooms"
                            label="Bedrooms"
                            type="number"
                            InputProps={{
                                inputProps: { min: 0 }
                            }}

                            variant="standard"
                        />
                        <TextField
                            onChange={handleChange}
                            autoFocus
                            required
                            margin="normal"
                            id="parking"
                            name="parking"
                            label="Parking"
                            type="number"
                            InputProps={{
                                inputProps: { min: 0 }
                            }}

                            variant="standard"
                        />

                        <TextField
                            onChange={handleChange}
                            autoFocus
                            required
                            margin="normal"
                            id="bathrooms"
                            name="bathrooms"
                            label="Bathrooms"
                            InputProps={{
                                inputProps: { min: 0 }
                            }}
                            type="number"

                            variant="standard"
                        />



                    </div>

                    <div className='flex justify-start items-center gap-8'>
                        <TextField
                            onChange={handleChange}
                            autoFocus
                            required
                            margin="normal"
                            id="address"
                            name="address"
                            label="Address"
                            type="text"

                            variant="standard"
                        />
                        <TextField
                            onChange={handleChange}
                            autoFocus
                            required
                            margin="normal"
                            id="city"
                            name="city"
                            label="City"
                            type="text"

                            variant="standard"
                        />
                        <TextField
                            onChange={handleChange}
                            autoFocus
                            required
                            margin="normal"
                            id="country"
                            name="country"
                            label="Country"
                            select
                            defaultValue={countries[0]}
                            SelectProps={{
                                native: true
                            }}

                            variant="standard"
                        >
                            {countries.map((option, i) => (
                                <option key={i} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>


                    </div>



                    <Map
                        address={propertyDetails.address}
                        city={propertyDetails.city}
                        country={propertyDetails.country}
                    ></Map>
                    <div className='flex flex-col md:flex-row lg:justify-evenly justify-center items-center mt-10'>
                        <TextField
                            autoFocus
                            required
                            margin='normal'
                            id='image'
                            name='image'
                            type='file'
                            onChange={handleFile}
                            className=''


                        />
                    { 
                        propertyDetails.image ? <img src={propertyDetails.image} alt="picture of property" className=' w-80 h-80 lg:w-96 lg:h-96' /> :null
                    
                    
                    }
                       
                

                    </div>




                </DialogContent>

                <DialogActions>
                    <Button onClick={onModalClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
                    
            </Dialog>
        </React.Fragment>
    )
}

export default AddPropertyModal