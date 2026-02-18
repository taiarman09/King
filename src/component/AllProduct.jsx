import React, { useState } from 'react';

function AllProduct({ search = "" }) {

    const [category, setCategory] = useState("all");
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);

    const products = [
        { 
            id: 1, 
            name: "men", 
            Category: "pent", 
            Brand: "Armani", 
            price: 29,
            images: [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
                "https://images.unsplash.com/photo-1516826957135-700dedea698c",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
                "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
            ] 
        },
        { 
            id: 2, 
            name: "women", 
            Category: "shirt", 
            Brand: "Nike", 
            price: 49,
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                "https://images.unsplash.com/photo-1520975928316-56c6a9c1b7a6",
                "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
                "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            ] 
        },
        { 
            id: 3, 
            name: "kids", 
            Category: "tshirt", 
            Brand: "Skechers", 
            price: 19,
            images: [
                "https://images.unsplash.com/photo-1520975928316-56c6a9c1b7a6",
                "https://images.unsplash.com/photo-1503342217505-b0a15cf70489",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
                "https://images.unsplash.com/photo-1516826957135-700dedea698c"
            ] 
        }
    ];

    const countries = ["all", ...new Set(products.map(p => p.Category))];
    const Brands = ["all", ...new Set(products.map(p => p.Brand))];

    const handleSelect = (value) => {
        setCategory(value);
        setIsCategoryOpen(false);
    };

    const handleBrandSelect = (value) => {
        setSelectedBrand(value);
        setIsBrandOpen(false);
    };

    const filteredProducts = products.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = category === "all" || item.Category === category;
        const matchBrand = selectedBrand === "all" || item.Brand === selectedBrand;
        return matchSearch && matchCategory && matchBrand;
    });

    // ✅ PRODUCT DETAIL PAGE
    if (selectedProduct) {
        return (
            <div className="max-w-5xl mx-auto w-full px-4 py-8">
                <button
                    onClick={() => { setSelectedProduct(null); setThumbnail(null); }}
                    className="mb-6 px-4 py-1.5 bg-white/10 text-white rounded-md"
                >
                    ← Back
                </button>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* ✅ FIXED MAIN IMAGE (No Zoom Issue) */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black flex items-center justify-center h-[380px]">
                            <img
                                src={thumbnail || selectedProduct.images[0]}
                                alt=""
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 mt-3">
                            {selectedProduct.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt=""
                                    onClick={() => setThumbnail(img)}
                                    className="w-16 h-16 object-cover rounded-md cursor-pointer border border-white/20"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 bg-white/5 p-6 rounded-xl border border-white/10">

                        <h1 className="text-2xl font-bold text-white mb-3">
                            {selectedProduct.name}
                        </h1>

                        <p className="text-gray-300 text-sm">Category: {selectedProduct.Category}</p>
                        <p className="text-gray-300 text-sm">Brand: {selectedProduct.Brand}</p>

                        <p className="text-2xl font-bold mt-4 text-yellow-400">
                            ₹ {selectedProduct.price}
                        </p>

                        <div className="flex gap-3 mt-6">
                            <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-sm">
                                Add to Cart
                            </button>
                            <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    // MAIN PAGE (unchanged)
    return (
        <div className='flex md:flex-row flex-col gap-6 w-full py-8'>

            <div className="flex md:flex-col md:w-[18%] gap-4 text-sm relative text-white 
                bg-white/5 p-4 rounded-xl border border-white/10">

                <div className="relative">
                    <p className='text-gray-300 text-[11px] mb-1'>Select Category</p>
                    <button
                        type="button"
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className="w-full pl-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-sm"
                    >
                        {category}
                    </button>

                    {isCategoryOpen && (
                        <ul className="absolute z-20 w-full bg-[#1a002e] border border-white/10 rounded-lg mt-2 py-1 text-sm">
                            {countries.map((country) => (
                                <li
                                    key={country}
                                    className="px-3 py-1.5 hover:bg-purple-600/40 cursor-pointer"
                                    onClick={() => handleSelect(country)}
                                >
                                    {country}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="relative">
                    <p className='text-gray-300 text-[11px] mb-1'>Select Brand</p>
                    <button
                        type="button"
                        onClick={() => setIsBrandOpen(!isBrandOpen)}
                        className="w-full pl-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-sm"
                    >
                        {selectedBrand}
                    </button>

                    {isBrandOpen && (
                        <ul className="absolute z-20 w-full bg-[#1a002e] border border-white/10 rounded-lg mt-2 py-1 text-sm">
                            {Brands.map((brand) => (
                                <li
                                    key={brand}
                                    className="px-3 py-1.5 hover:bg-purple-600/40 cursor-pointer"
                                    onClick={() => handleBrandSelect(brand)}
                                >
                                    {brand}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className='flex md:w-[82%] w-full flex-wrap gap-6 justify-center'>

                {filteredProducts.map((item) => (
                    <div
    key={item.id}
    onClick={() => {
        setSelectedProduct(item);
        setThumbnail(item.images[0]);
    }}
    className="flex flex-col bg-white/10 border border-white/10 rounded-xl shadow-md w-full sm:w-[45%] md:w-[30%] lg:w-60 cursor-pointer overflow-hidden"
>

    {/* ✅ Image Full Area */}
    <div className="w-full aspect-square overflow-hidden">
        <img
            className="w-full h-full object-cover"
            src={item.images[0]}
            alt={item.name}
        />
    </div>

    {/* Product Info */}
    <div className="px-3 py-3 text-white">
        <p className="text-gray-300 text-xs">$ {item.price}.00</p>

        <div className="text-base font-semibold">
            {item.name}
        </div>

        <div className="text-gray-400 text-xs">
            {item.Category}
        </div>

        <div className="text-gray-400 text-xs">
            {item.Brand}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
            <button
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 py-1.5 rounded-md text-xs hover:opacity-90 transition"
            >
                Add to cart
            </button>

            <button
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-r from-purple-500 to-pink-500 py-1.5 rounded-md text-xs hover:opacity-90 transition"
            >
                Buy now
            </button>
        </div>
    </div>

</div>

                ))}

            </div>
        </div>
    );
}

export default AllProduct;
