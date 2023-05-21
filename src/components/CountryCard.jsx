import React from "react";
import { useNavigate } from 'react-router-dom'

const CountryCard = ({ country }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(country?.name)} className="max-w-sm rounded overflow-hidden py-5 cursor-pointer" style={{ boxShadow: '1px 1px 15px #eee' }}>
            <div className="flex justify-center items-center">
                <img className="w-[30%]" src={country?.flag} alt={`Flag of ${country?.name}`} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{country?.name}</div>
                <div className="mb-2">
                    <span className="font-bold">Capital:</span> {country?.capital_city}
                </div>
                <div className="mb-2">
                    <span className="font-bold">Region:</span> {country?.region}
                </div>
                <div className="mb-2">
                    <span className="font-bold">Subregion:</span> {country?.sub_region}
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
