import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { API } from './api/axios-client'
import Loader from './helpers/Lloader'
import Tabs from './components/Tabs-Toggle'

import CountryInfo from './components/Country-Info'
import WeatherForecast from './components/Weather-Forecast'
import CountryTimeZone from './components/Country-Time-Zone'

const CountryDetails = () => {
    const params = useParams();
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true)
    const [tab, setTab] = useState('Country Info')


    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await API.GET(`/country/${params.id}`)
                setCountry({ ...response.data });
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [params.id])

    useEffect(() => {
        setLoading(false)
    }, [country])



    return (
        <div className='relative'>
            <Navbar />
            <Link to={'/'} className={'absolute cursor-pointer left-10 top-5 md:top-10'}>
                <BsArrowLeftCircleFill size={40} color='#3786FB' />
            </Link>
            {
                loading ? <Loader /> :
                    <div className='w-[90%] mb-10 md:w-[85%] md:p-5 mx-auto flex flex-col md:flex-row md:justify-between space-x-6'>
                        <div className='flex flex-col flex-[0.3] items-center space-x-10 shadow-xl h-fit'>
                            <img src={country.flag} alt="" className='rounded-full w-32 h-32 md:w-40 md:h-40' />
                            <div className='flex flex-col space-y-3 mb-7'>
                                <h1 className='text-4xl font-bold'>{country.name}</h1>
                            </div>
                        </div>
                        <div className='flex flex-[0.7] flex-col'>
                            <Tabs tabs={['Country Info', 'Time Zone', 'Weather Forecast', 'Weather Insights']} getTab={setTab} />
                            <div className='w-full'>
                                {tab === 'Country Info' && <CountryInfo country={country} />}
                                {tab === 'Time Zone' && <CountryTimeZone/>}
                                {tab === 'Weather Forecast' && <WeatherForecast />}
                                {tab === 'Weather Insights' && <p>Archives</p>}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}


export default CountryDetails
