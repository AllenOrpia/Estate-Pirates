import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useMutation } from 'react-query';
import UserDetailContext from '../../context/userDetailsContext.js'
import { bookVisit } from '../../utils/api.js';
import { toast } from 'react-toastify'
import dayjs from 'dayjs';

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

const BookingModal = ({ open, handleClose, propertyId, email }) => {

    const { userDetails: { token }, setUserDetails } = React.useContext(UserDetailContext)
    const [value, setValue] = React.useState(null);

    const handleBookingSuccess = () => {
        toast.success('Visit booked successfully', {
            position: 'bottom-right'
        });
        setUserDetails( (prev) => ({
            ...prev,
            bookings: [
              ...prev.bookings,
              {
                id: propertyId,
                date: dayjs(value).format("DD/MM/YYYY"),
              },
            ],
          }));
    }

    const { mutate, isLoading } = useMutation({
        mutationFn: () => bookVisit(value, propertyId, email, token),
        onSuccess: () => handleBookingSuccess(),
        onError: ({ response }) => toast.error(response.data.message),
        onSettled: () => handleClose()
    })
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Book House Tour
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Select Date"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                disablePast

                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Button disabled={!value || isLoading} onClick={() => {
                        mutate()
                    }}>Book Tour</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default BookingModal