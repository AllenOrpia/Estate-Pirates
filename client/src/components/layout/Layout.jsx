import React from 'react'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className='bg-black overflow-hidden'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout