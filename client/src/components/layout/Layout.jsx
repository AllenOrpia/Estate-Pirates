import React, { useContext, useEffect } from 'react'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import { Outlet, createHashRouter, json } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../../context/userDetailsContext.js'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api.js'
import axios from 'axios'
import useFavorites from '../../hooks/useFavorites.jsx'
import useBookings from '../../hooks/useBookings.jsx'


const Layout = () => {
  useBookings()
  useFavorites()
  const { isAuthenticated, user, getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
  const { userDetails, setUserDetails } = useContext(UserDetailContext)
  console.log(userDetails)


  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegsiter = async () => {

      const res = await getAccessTokenSilently({
        authorizationParams: {
          audience: "http://localhost:3000",
          scope: "openid profile email",
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res)

      
    }


    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);
  
  return (
    <section >
      <div className=' bg-black overflow-hidden' >
        <Header />
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}

export default Layout