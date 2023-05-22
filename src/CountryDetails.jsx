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
import WeatherInsights from './components/Weather-Insights'

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
            <Link to={'/'} className={'absolute cursor-pointer left-10 top-5 md:top-7'}>
                <BsArrowLeftCircleFill size={30} color='#3786FB' />
            </Link>
            {
                loading ? <Loader /> :
                    <div className='w-[90%] mb-10 md:w-[85%] md:p-5 mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start md:space-x-6 space-y-10 md:space-y-0'>
                        <div className='flex w-full flex-col md:w-[30%] items-center border-[1px] border-gray-600/20 py-5 rounded-xl md:border-0 md:shadow-md h-fit'>
                            <img src={country.flag} alt="" className='rounded-full w-32 h-32 md:w-40 md:h-40' />
                            <div className='flex justify-center items-center'>
                                <h1 className='text-xl md:text-3xl font-bold text-center'>{country.name}</h1>
                            </div>
                        </div>
                        <div className='flex flex-1 md:w-[70%] flex-col'>
                            <Tabs tabs={['Country Info', 'Time Zone', 'Weather Forecast', 'Weather Insights']} getTab={setTab} />
                            <div className='w-full'>
                                {tab === 'Country Info' && <CountryInfo country={country} />}
                                {tab === 'Time Zone' && <CountryTimeZone timezone={country.timezone} />}
                                {tab === 'Weather Forecast' && <WeatherForecast />}
                                {tab === 'Weather Insights' && <WeatherInsights />}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}


export default CountryDetails
