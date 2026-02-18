import React, { useState, useEffect } from 'react'
import Logo from '../assets/king-logo.png'
import { FaRegHeart, FaUser, FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import Login from './Login';

function Nav() {

    const [isLogin, setIsLogin] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false) // 🔥 NEW STATE

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLogin(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLogin(false);
        setShowAccountMenu(false);
    }

    return (
        <>
            <div className='h-[100px] w-full bg-black text-white border border-black flex justify-between items-center sm:px-5 px-3 relative'>

                {/* Logo */}
                <div className='sm:w-[200px] w-[150px] sm:h-[100px]'>
                    <img className='h-[100%] w-[100%]' src={Logo} alt="" />
                </div>

                {/* Desktop Menu */}
                <ul className='sm:flex hidden gap-5 items-center text-[20px]'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FaRegHeart /></li>
                    <li><IoCart /></li>

                    <li
                        className='cursor-pointer relative'
                        onClick={() => {
                            if (isLogin) {
                                setShowAccountMenu(!showAccountMenu);
                            } else {
                                setShowLogin(true);
                            }
                        }}
                    >
                        {isLogin ? <FaUserCircle /> : <FaUser />}
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className='text-[20px] sm:hidden flex p-3 cursor-pointer'
                >
                    <CiMenuFries />
                </div>

                {/* 🔥 Mobile Dropdown Menu */}
                {showMobileMenu && (
                    <ul className="absolute top-[100px] left-0 w-full bg-black flex flex-col items-center gap-5 py-5 sm:hidden z-50">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li><FaRegHeart /></li>
                        <li><IoCart /></li>

                        <li
                            className='cursor-pointer'
                            onClick={() => {
                                if (isLogin) {
                                    setShowAccountMenu(!showAccountMenu);
                                } else {
                                    setShowLogin(true);
                                }
                            }}
                        >
                            {isLogin ? <FaUserCircle /> : <FaUser />}
                        </li>
                    </ul>
                )}

                {/* Logout Dropdown */}
                {showAccountMenu && isLogin && (
                    <div className="absolute right-5 top-[90px] bg-white shadow-md rounded-md p-4 z-50">
                        <button
                            onClick={handleLogout}
                            className="text-red-500"
                        >
                            Logout
                        </button>
                    </div>
                )}

            </div>

            {/* Login Modal */}
            {showLogin && (
                <Login
                    setIsLogin={setIsLogin}
                    setShowLogin={setShowLogin}
                />
            )}
        </>
    )
}

export default Nav
