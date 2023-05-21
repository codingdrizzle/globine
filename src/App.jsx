import { useEffect, useState } from "react";
import { API } from "./api/axios-client";
import CountryCard from './components/CountryCard';
import Layout from './components/Layout';
import Loader from "./helpers/Loader";

function App() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await API.GET('/countries')
                setCountries([...response.data]);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [countries])


    const handleSearch = (event) => setSearchQuery(event.target.value);

    const handleFilterSelect = async (event) => {
        try {
            setLoading(true)
            const response = await API.GET(`${event.target.value === 'All' ? '/countries' : '/countries/filter/' + event.target.value}`);
            setCountries([...response.data])
            setFilter(event.target.value);
            localStorage.setItem('filter', event.target.value);
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setLoading(false)
        }
    };

    return (
        <Layout searchTrigger={handleSearch} handleFiterSelect={handleFilterSelect}>
            {loading ? <Loader /> :
                errorMessage !== '' ? <span className="">{errorMessage}</span> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
                        {
                            searchQuery.length !== 0 && filter === 'All' ?
                                countries
                                    .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
                                    .filter((country) => country.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                                    .map((country) => <CountryCard country={country} />) :

                                filter === 'All' ?
                                    countries
                                        .map((country) => <CountryCard country={country} />) :

                                    searchQuery.length !== 0 && filter !== 'All' ?
                                        countries
                                            .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
                                            .filter((country) => country.region === filter)
                                            .filter((country) => country.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                                            .map((country) => (<CountryCard country={country} />)) :

                                        countries
                                            .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
                                            .filter((country) => country.region === filter)
                                            .map((country) => (<CountryCard country={country} />))
                        }
                    </div>
            }
        </Layout>
    );
}
export default App;
