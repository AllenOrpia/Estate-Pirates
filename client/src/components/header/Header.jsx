import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler  from 'react-outside-click-handler'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const getMenuStyle = (menuOpen) => {
        if (document.documentElement.clientWidth <= 1000) {
            return { right: !menuOpen && "-100%" }
        }
    }
    return (
        <section className="header-wrapper text-white">
            <div className="header-container paddings innerWidth justify-between items-center flex flex-wrap  ">
                {/* <img src="./logo (1).png" alt="logo" width={100} />
             */}
                <h1 className='text-3xl font-bold'>Estate Pirates</h1>

                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpen(false)
                }}>

                    <div className="header-menu gap-5 flexCenter transition-all duration-300 ease-in"
                        style={getMenuStyle(menuOpen)}>
                        <a href="">
                            Residencies
                        </a>
                        <a href="">
                            Our Value
                        </a>
                        <a href="">
                            Contact Us
                        </a>
                        <a href="">
                            Get Started
                        </a>
                        <a href="">
                            <button className='button bg-gradient-to-r from-blue-500 to-blue-700'>Contact</button>
                        </a>
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