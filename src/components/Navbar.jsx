import React from "react";
import globe from '../assets/globe.png'

function Navbar() {
    return (
        <nav className="bg-[#fff] py-4 mb-12 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <img src={globe} alt="Logo" className="w-[50px] md:w-[60px]"/>
                    <span className="text-xl md:text-2xl font-bold">Globine</span>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;