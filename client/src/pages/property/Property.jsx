import React, { useState, useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getProperty, removeVisit } from '../../utils/api.js';
import { PuffLoader } from 'react-spinners';
import { AiFillHeart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import './Property.css';

import { FaShower } from 'react-icons/fa';
import { AiTwotoneCar } from 'react-icons/ai';
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md';
import Map from '../../components/map/Map.jsx';
import useAuthCheck from '../../hooks/useAuthCheck.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import BookingModal from '../../components/bookingModal/BookingModal.jsx';
import UserDetailContext from '../../context/userDetailsContext.js'
import { toast } from 'react-toastify'

const Property = () => {
    const { userDetails: { token, bookings }, setUserDetails } = useContext(UserDetailContext)
    const { mutate: cancelBooking, isLoading: cancelling} = useMutation({
        mutationFn: () => removeVisit(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev,
                bookings: prev.bookings.filter((booking) => booking?.id !== id )
            }));

            toast.success('Visit canceled!', {position : 'bottom-right'})
        }
    })
    const { pathname } = useLocation();
    // Split the url by backticks and get the last part or last index as that is the id
    const id = pathname.split('/').slice(-1)[0]
    const { data, isLoading, isError } = useQuery(['resd', id], () => getProperty(id));
    console.log(bookings)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { validateLogin } = useAuthCheck();
    const { user } = useAuth0()

    if (isLoading) {
        return (
            <div className="flexCenter paddings">
                <PuffLoader />
            </div>
        )
    }
    if (isError) {
        return (
            <div className="flexCenter paddings">
                <span>Could not get property details</span>
            </div>
        )
    }
    return (

        <div className='bg-white property-wrapper'>
            <div className="flexColStart paddings innerWidth gap-8 relative property-container ">

                {/* Like Button */}
                <div className="like">
                    <AiFillHeart size={24} className='absolute top-20 right-12 cursor-pointer text-white' />
                </div>

                {/* Property Image */}
                <img src={data?.image} alt="Property Image" className='property-image self-center w-full rounded-2xl object-cover' />

                {/* Property Details */}
                <div className="flex justify-between items-center flex-wrap w-full gap-4">
                    {/* Left */}
                    <div className='flexColStart left flex-1 gap-4'>
                        {/* Head */}
                        <div className='flex justify-start items-center gap-4 w-full'>
                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText text-xl'>${data?.price}</span>
                        </div>




                        {/* Address */}
                        <div className='flexStart gap-2'>
                            <MdLocationPin size={25} />
                            <span className='secondaryText'>
                                {
                                    data?.address
                                },

                            </span>
                            <span className="secondaryText">
                                {
                                    data?.city
                                },
                            </span>
                            <span className="secondaryText">
                                {
                                    data?.country
                                }
                            </span>
                        </div>

                        {/* Facilities */}
                        <div className="flexStart facilities gap-4 p-4 text-lg ">
                            <div className="flexStart facility gap-2">
                                <FaShower size={20} className="text-black" />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flexStart facility gap-2">
                                <AiTwotoneCar size={20} className="text-black " />
                                <span>{data?.facilities?.parking} Parking </span>
                            </div>
                            <div className="flexStart facility gap-2">
                                <MdMeetingRoom size={20} className="text-black" />
                                <span>{data?.facilities?.bedrooms} Bedrooms</span>
                            </div>
                        </div>

                        {/* Property Description */}
                        <span className='secondaryText'>
                            {data?.description}
                        </span>



                        {/* Book Tour Button */}
                       
                        {
                            bookings?.map( (booking) => booking.id).includes(id) ? (
                                <>
                                    <button className='button w-full bg-red-500' onClick={() => cancelBooking()} disabled={cancelling}>
                                        Cancel Booking
                                    </button>
                                    <span>You booked an upcoming visit on { bookings?.filter((booking) => booking?.id === id)[0].date}
                                    
                                    </span>
                                
                                
                                </>
                                    
                                
                            ) : (
                            <button
                                className='button bg-gradient-to-r from-blue-400 to-blue-600 mt-3 w-full'
                                onClick={() => {
                                    validateLogin() && setOpen(true);
                                }}>
                                Book House Tour
                            </button> )
                            
                        }




                        <BookingModal
                            open={open}
                            handleClose={handleClose}
                            propertyId={id}
                            email={user?.email}
                        />
                    </div>

                    {/* Right */}
                    <div className='flex-1 gap-4'>
                        {/* MAP */}

                        <Map
                            address={data?.address}
                            city={data?.city}
                            country={data?.country} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Property