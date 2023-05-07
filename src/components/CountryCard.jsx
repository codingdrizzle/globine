import React from "react";
import { useNavigate } from 'react-router-dom'

const CountryCard = ({ country }) => {
    const { name, capital, region, subregion, flag } = country;

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(name)} className="max-w-sm rounded overflow-hidden py-5 cursor-pointer" style={{ boxShadow: '1px 1px 15px #eee' }}>
            <div className="flex justify-center items-center">
                <img className="w-[30%]" src={flag.large} alt={`Flag of ${name}`} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="mb-2">
                    <span className="font-bold">Capital:</span> {capital}
                </div>
                <div className="mb-2">
                    <span className="font-bold">Region:</span> {region}
                </div>
                <div className="mb-2">
                    <span className="font-bold">Subregion:</span> {subregion}
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
