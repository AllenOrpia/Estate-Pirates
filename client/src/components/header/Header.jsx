import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler  from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'
import ProfileMenu from '../profileMenu/ProfileMenu'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const getMenuStyle = (menuOpen) => {
        if (document.documentElement.clientWidth <= 1000) {
            return { right: !menuOpen && "-100%" }
        }
    }

    const { loginWithRedirect, isAuthenticated, user, logout} = useAuth0();

    return (
        <section className="header-wrapper text-white">
            <div className="header-container paddings innerWidth justify-between items-center flex flex-wrap  ">
                {/* <img src="./logo (1).png" alt="logo" width={100} />
             */}
             <Link to="/">
                <h1 className='text-3xl font-bold'>Estate Pirates</h1>
             </Link>

                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpen(false)
                }}>

                    <div className="header-menu gap-5 flexCenter transition-all duration-300 ease-in"
                        style={getMenuStyle(menuOpen)}>
                         <NavLink to="/properties">Properties</NavLink>
                         <a href="mailto:dummyEmail@gmail.com">Contact</a>

                         {
                            !isAuthenticated ? 
                                <button 
                                    className='button bg-gradient-to-r from-blue-400 to-blue-600'
                                    onClick={ loginWithRedirect }
                                >Log In</button> 
                                :
                                <ProfileMenu user={user} logout={logout} />


                         }
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default Header