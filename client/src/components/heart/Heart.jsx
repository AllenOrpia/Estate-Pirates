import React, { useContext, useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import useAuthCheck from '../../hooks/useAuthCheck';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailContext from '../../context/userDetailsContext';
import { updateFavourites, checkFavorites} from '../../utils/common.js';
import { toFav } from '../../utils/api.js';
import { toast } from 'react-toastify';
const Heart = ({id}) => {

    const [heartColor, setHeartColor] = useState('white')
    const { validateLogin } = useAuthCheck();
    const { user } = useAuth0();
    const { 
        userDetails : { favorites, token },
        setUserDetails
    } = useContext(UserDetailContext);

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev,
                favorites: updateFavourites(id, prev.favorites)
            }))
        }
    })

    useEffect(() => {
        setHeartColor(() => checkFavorites(id, favorites))
    }, [favorites])


    const handleLike = () => {
        if (validateLogin()) {
            {
                mutate()
                setHeartColor((prev) => prev === 'red' ? 'white' : 'red')
            }
        }
    }
    
  return (
    <AiFillHeart size={24} 
        className='absolute top-20 right-12 cursor-pointer'
        color={heartColor} 
        onClick={(e) => {
            e.stopPropagation();
            handleLike()
        }}
    />
  )
}

export default Heart