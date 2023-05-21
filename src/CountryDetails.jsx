import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import { FaCode, FaCity } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { HiAtSymbol } from 'react-icons/hi'
import { SiHashnode } from 'react-icons/si'
import { TbWorldLongitude, TbLanguageHiragana } from 'react-icons/tb'
import { BsFillPeopleFill, BsCurrencyExchange, BsArrowLeftCircleFill } from 'react-icons/bs'
import { MdTimer } from 'react-icons/md'
import { API } from './api/axios-client'
import Loader from './helpers/Loader'

const CountryDetails = () => {
    const params = useParams();
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true)

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
                <BsArrowLeftCircleFill size={40} color='#031a57' />
            </Link>
            {
                loading ? <Loader /> :
                    <div className='w-[90%] mb-10 md:w-[80%] lg:w-[50%] md:border-[1px] md:rounded-lg md:p-5 mx-auto'>
                        <div className='flex flex-col items-center space-x-10 '>
                            <img src={country.flag} alt="" className='rounded-full w-32 h-32 md:w-40 md:h-40' />
                            <div className='flex flex-col space-y-3 mb-7'>
                                <h1 className='text-4xl font-bold'>{country.name}</h1>
                            </div>
                        </div>
                        <div className='flex w-full flex-row flex-wrap md:justify-start md:flex-row'>
                            <Tags value={country.name} label_name={'Official Name'} label_icon={<HiAtSymbol size={25} />} />
                            <Tags value={country.initials} label_name={'Name Initials'} label_icon={<SiHashnode size={25} />} />
                            <Tags value={country.country_code} label_name={'Country Code'} label_icon={<FaCode size={25} />} />
                            <Tags value={country.capital_city} label_name={'Capital City'} label_icon={<FaCity size={25} />} />
                            <Tags value={country.region} label_name={'Region'} label_icon={<BiWorld size={25} />} />
                            <Tags value={country.sub_region} label_name={'Sub Region'} label_icon={<TbWorldLongitude size={25} />} />
                            <Tags value={country.population} label_name={'Population'} label_icon={<BsFillPeopleFill size={25} />} />
                            <Tags value={country.time_zone} label_name={'Time Zone'} label_icon={<MdTimer size={25} />} />
                            <Tags value={country.currency?.name} currency={<span><span className='w-8 h-8 bg-red-400/30 border-[1px] border-red-500 inline-flex justify-center items-center rounded-lg text-xl font-bold'>{country.currency?.symbol}</span></span>} label_name={'Currency'} label_icon={<BsCurrencyExchange size={25} />} />
                            <Tags value={country.languages?.map((item, index, array) => (<span>{item}{index !== array.length - 1 && ' | '}</span>))} label_name={'Language(s)'} label_icon={<TbLanguageHiragana size={25} />} />

                        </div>
                    </div>
            }
        </div>
    )
}

const Tags = ({ label_name, label_icon, value, currency }) => {
    return (
        <div className='flex flex-col w-1/2 md:w-1/3 space-y-1 items-center my-5'>
            <div className='w-fit flex justify-center items-center space-x-1'>
                <span className='w-10 h-10 flex justify-center items-center rounded-full bg-blue-400/20'>
                    {label_icon}
                </span>
                <span className='text-lg font-medium'>{label_name}</span>
            </div>
            <h1 className='text-center w-fit flex items-center gap-1'>{value}{currency && currency}</h1>
        </div>
    )
}

export default CountryDetails
