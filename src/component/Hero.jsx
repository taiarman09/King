import React, { useState } from "react";
import AllProduct from "./AllProduct";

const Hero = () => {

    const [search, setSearch] = useState("");

    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
                * { font-family: "Poppins", sans-serif; }
            `}</style>

            <section className='flex flex-col items-center bg-gradient-to-b from-black via-[#1a002e] to-[#3B006E] text-white px-4 pb-16 relative overflow-hidden'>

                {/* Avatars + Stars */}
                <div className="flex items-center md:mt-24 mt-16">
                    <div className="flex -space-x-3 pr-3">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="" className="size-8 object-cover rounded-full border-2 border-white hover:scale-110 transition duration-300" />
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="" className="size-8 object-cover rounded-full border-2 border-white hover:scale-110 transition duration-300" />
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="" className="size-8 object-cover rounded-full border-2 border-white hover:scale-110 transition duration-300" />
                    </div>

                    <div>
                        <div className="flex">
                            {Array(5).fill(0).map((_, i) => (
                                <span key={i} className="text-[#FF8F20] text-lg hover:scale-125 transition duration-300">★</span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-300">Used by 10,000+ users</p>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-[42px]/13 md:text-6xl/19 font-semibold text-center max-w-[840px] mt-6 bg-gradient-to-r from-white via-purple-300 to-[#5D009F] text-transparent bg-clip-text hover:scale-105 transition duration-500">
                    Elevate Your Style. Discover Trendy Fashion.
                </h1>

                <p className="text-gray-300 text-sm text-center max-w-sm mt-3">
                    Shop the latest collections in men’s fashion.
                </p>

                {/* Search Bar */}
                <div className="mt-8 flex items-center bg-white/10 backdrop-blur-lg border border-white/20 h-12 pl-3 rounded-xl w-full max-w-md shadow-lg hover:shadow-purple-500/20 transition duration-300">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-2 w-full h-full outline-none bg-transparent text-white placeholder-gray-300"
                        type="text"
                        placeholder="Search for clothes..."
                    />
                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 h-10 text-sm rounded-lg mr-1 hover:scale-105 transition duration-300 shadow-md">
                        Search
                    </button>
                </div>

                {search !== "" && (
                    <p className="mt-4 text-gray-300">
                        Searching for: <span className="text-purple-400 font-semibold">{search}</span>
                    </p>
                )}

                <AllProduct search={search} />

            </section>
        </>
    );
}

export default Hero;
