//import axios from "axios";
//import { useState } from "react";
//import { useEffect } from "react";
//import { API } from "./api/axios-client";
//import { GET_ALL_COUNTRIES } from "./api/endpoints";
import { useState } from 'react';
import CountryCard from './components/CountryCard';
import Layout from './components/Layout';
import countries from './countries.json'
import ReactPaginate from 'react-paginate';




function App() {
    //const [countries, setCountries] = useState([])

    //useEffect(() => {
    //    (async () => {
    //        try {
    //            const countriesData = await API.GET(GET_ALL_COUNTRIES)
    //            setCountries(countriesData.data);
    //        } catch (error) {
    //            console.log(error)
    //        }
    //    })()
    //}, [])

    //useEffect(() => {
    //    console.log(countries.af)
    //}, [countries])

    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFiterSelect = (event) => {
        setFilter(event.target.value)
    }

    return (
        <Layout searchTrigger={handleSearch} handleFiterSelect={handleFiterSelect}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {
                    searchQuery.length !== 0 ?
                        Object.values(countries)
                            .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
                            .filter((country) => country.name.toLowerCase().includes(searchQuery.trim().toLowerCase() || country.region === filter))
                            .map((country) =>  <CountryCard country={country} />) :
                        filter === 'All' ?
                            Object.values(countries)
                                .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
                                .map((country) => (<CountryCard country={country} />)) :
                            Object.values(countries)
                                .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
                                .filter((country) => country.region === filter)
                                .map((country) => {
                                    console.log(country.region === filter)
                                    return (<CountryCard country={country} />)
                                })
                }
            </div>
        </Layout>
    );
}
export default App;
