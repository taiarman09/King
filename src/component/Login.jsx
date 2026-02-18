import React, { useState, useEffect } from "react";

function Login({ setIsLogin, setShowLogin }) {

    const [page, setPage] = useState("login");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("user", "loggedIn");
        setIsLogin(true);
        setShowLogin(false);
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setShowLogin(false)}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-[380px] p-8 rounded-2xl shadow-2xl animate-scaleIn relative"
            >

                {/* Close */}
                <button
                    onClick={() => setShowLogin(false)}
                    className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg"
                >
                    ✕
                </button>

                {/* LOGIN */}
                {page === "login" && (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Welcome Back 👋
                        </h2>

                        <form onSubmit={handleLogin} className="space-y-4">

                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                            />

                            <div className="text-right">
                                <span
                                    onClick={() => setPage("forgot")}
                                    className="text-indigo-500 cursor-pointer text-sm"
                                >
                                    Forgot Password?
                                </span>
                            </div>

                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition">
                                Login
                            </button>
                        </form>

                        <p className="text-center mt-5 text-sm">
                            Don’t have an account?
                            <span
                                onClick={() => setPage("signup")}
                                className="text-indigo-600 ml-1 cursor-pointer"
                            >
                                Signup
                            </span>
                        </p>
                    </>
                )}

                {/* SIGNUP */}
                {page === "signup" && (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Create Account 🚀
                        </h2>

                        <form className="space-y-4">
                            <input className="w-full border px-4 py-3 rounded-xl" placeholder="Name" />
                            <input className="w-full border px-4 py-3 rounded-xl" placeholder="Email" />
                            <input className="w-full border px-4 py-3 rounded-xl" placeholder="Password" />

                            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
                                Sign Up
                            </button>
                        </form>

                        <p className="text-center mt-5 text-sm">
                            Already have an account?
                            <span
                                onClick={() => setPage("login")}
                                className="text-indigo-600 ml-1 cursor-pointer"
                            >
                                Login
                            </span>
                        </p>
                    </>
                )}

                {/* FORGOT */}
                {page === "forgot" && (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Reset Password 🔑
                        </h2>

                        <form className="space-y-4">
                            <input
                                className="w-full border px-4 py-3 rounded-xl"
                                placeholder="Enter your email"
                            />

                            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
                                Send Reset Link
                            </button>
                        </form>

                        <p className="text-center mt-5 text-sm">
                            Back to
                            <span
                                onClick={() => setPage("login")}
                                className="text-indigo-600 ml-1 cursor-pointer"
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
