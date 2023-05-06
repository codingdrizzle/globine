import React from "react";
import globe from '../assets/globe.png'

function Navbar() {
    return (
        <nav class="bg-[#fff] py-4 mb-12 shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-center items-center">
                    <img src={globe} alt="Logo" className="w-[50px] md:w-[90px]"/>
                    <span className="text-xl md:text-2xl font-bold">Globine</span>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;