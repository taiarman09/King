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
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) setIsLogin(true);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLogin(false);
        setShowAccountMenu(false);
    }

    return (
        <>
            {/* 🔥 Blur Wrapper */}
            <div className={`${showLogin ? "blur-sm pointer-events-none select-none transition-all duration-300" : ""}`}>

                <div className='h-[100px] w-full bg-black text-white flex justify-between items-center sm:px-5 px-3 relative'>

                    {/* Logo */}
                    <div className='sm:w-[200px] w-[150px] sm:h-[100px] cursor-pointer'>
                        <img className='h-full w-full object-contain' src={Logo} alt="logo" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className='sm:flex hidden gap-6 items-center text-[18px]'>
                        <li className='hover:text-indigo-400 cursor-pointer'>Home</li>
                        <li className='hover:text-indigo-400 cursor-pointer'>About Us</li>
                        <li className='hover:text-indigo-400 cursor-pointer'>Contact</li>
                        <li className='cursor-pointer hover:scale-110 transition'><FaRegHeart /></li>
                        <li className='cursor-pointer hover:scale-110 transition'><IoCart /></li>

                        <li
                            className='cursor-pointer text-xl hover:scale-110 transition'
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
                        className='text-[22px] sm:hidden flex p-3 cursor-pointer hover:scale-110 transition'
                    >
                        <CiMenuFries />
                    </div>

                    {/* Mobile Menu */}
                    {showMobileMenu && (
                        <ul className="absolute top-[100px] left-0 w-full bg-black flex flex-col items-center gap-6 py-6 sm:hidden z-50">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li><FaRegHeart /></li>
                            <li><IoCart /></li>

                            <li
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
                        <div className="absolute right-5 top-[90px] bg-white text-black shadow-lg rounded-xl p-4 z-50 animate-fadeIn">
                            <button
                                onClick={handleLogout}
                                className="text-red-500 hover:text-red-700 font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                </div>
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
