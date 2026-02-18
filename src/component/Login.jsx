import React, { useState } from "react";

function Login({ setIsLogin, setShowLogin }) {

    const [page, setPage] = useState("login");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem("user", "loggedIn");

        setIsLogin(true);      // update navbar icon
        setShowLogin(false);   // close modal
    };

    return (
        <div className="w-full h-[100vh] border border-black flex justify-center items-center fixed top-0 left-0 bg-black/50">

            <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-lg relative">

                {/* Close Button */}
                <button 
                    onClick={() => setShowLogin(false)}
                    className="absolute top-2 right-3 text-red-500 text-lg"
                >
                    ✕
                </button>

                {/* LOGIN */}
                {page === "login" && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                            Welcome back
                        </h2>

                        <form onSubmit={handleLogin}>
                            <input
                                className="w-full border my-3 rounded-full py-2.5 px-4"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                            <input
                                className="w-full border mt-1 rounded-full py-2.5 px-4"
                                type="password"
                                placeholder="Enter your password"
                                required
                            />

                            <div className="text-right py-4">
                                <span
                                    onClick={() => setPage("forgot")}
                                    className="text-blue-600 underline cursor-pointer"
                                >
                                    Forgot Password
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
                            >
                                Log in
                            </button>
                        </form>

                        <p className="text-center mt-4">
                            Don’t have an account?
                            <span
                                onClick={() => setPage("signup")}
                                className="text-blue-500 underline ml-1 cursor-pointer"
                            >
                                Signup
                            </span>
                        </p>
                    </>
                )}

                {/* SIGNUP */}
                {page === "signup" && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                            Create Account
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                className="w-full border my-3 rounded-full py-2.5 px-4"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />

                            <input
                                className="w-full border my-3 rounded-full py-2.5 px-4"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                            <input
                                className="w-full border mt-1 rounded-full py-2.5 px-4"
                                type="password"
                                placeholder="Create password"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full mt-5 mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
                            >
                                Sign Up
                            </button>
                        </form>

                        <p className="text-center mt-4">
                            Already have an account?
                            <span
                                onClick={() => setPage("login")}
                                className="text-blue-500 underline ml-1 cursor-pointer"
                            >
                                Login
                            </span>
                        </p>
                    </>
                )}

                {/* FORGOT */}
                {page === "forgot" && (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                            Reset Password
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                className="w-full border my-3 rounded-full py-2.5 px-4"
                                type="email"
                                placeholder="Enter your registered email"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full mt-5 mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
                            >
                                Send Reset Link
                            </button>
                        </form>

                        <p className="text-center mt-4">
                            Remember your password?
                            <span
                                onClick={() => setPage("login")}
                                className="text-blue-500 underline ml-1 cursor-pointer"
                            >
                                Login
                            </span>
                        </p>
                    </>
                )}

            </div>
        </div>
    );
}

export default Login;
