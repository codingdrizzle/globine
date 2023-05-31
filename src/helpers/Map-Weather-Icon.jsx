import { RiSunLine } from 'react-icons/ri';
import { FaCloudSun, FaCloud, FaCloudShowersHeavy, FaCloudRain } from 'react-icons/fa';
import { FiCloudDrizzle} from 'react-icons/fi';
import { IoThunderstormOutline } from 'react-icons/io5';
import { TiWeatherSnow, TiWeatherPartlySunny } from 'react-icons/ti';
import { TbWind } from 'react-icons/tb';
import { BsCloudFog2Fill, BsCloudSnowFill } from 'react-icons/bs';
import { WiRain, WiSleet, WiHail } from 'react-icons/wi';

const weatherConditions = [
    { text: 'Clear', icon: <RiSunLine size={100} color="#FFD700" /> },
    { text: 'Sunny', icon: <RiSunLine size={100} color="#FFD700" /> },
    { text: 'Partly cloudy', icon: <FaCloudSun size={100} color="#FFD700" /> },
    { text: 'Cloudy', icon: <FaCloud size={100} color="#9ac0e6" /> },
    { text: 'Overcast', icon: <FaCloud size={100} color="#9ac0e6" /> },
    { text: 'Mist', icon: <BsCloudFog2Fill size={100} color="#9ac0e6" /> },
    { text: 'Fog', icon: <BsCloudFog2Fill size={100} color="#9ac0e6" /> },
    { text: 'Freezing fog', icon: <BsCloudFog2Fill size={100} color="#9ac0e6" /> },
    { text: 'Patchy rain nearby', icon: <FaCloudShowersHeavy size={100} color="#9ac0e6" /> },
    { text: 'Patchy snow nearby', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Patchy sleet nearby', icon: <WiSleet size={100} color="#9ac0e6" /> },
    { text: 'Patchy freezing drizzle nearby', icon: <FiCloudDrizzle size={100} color="#9ac0e6" /> },
    { text: 'Thundery outbreaks in nearby', icon: <IoThunderstormOutline size={100} color="#9ac0e6" /> },
    { text: 'Blowing snow', icon: <BsCloudSnowFill size={100} color="#9ac0e6" /> },
    { text: 'Blizzard', icon: <span><BsCloudFog2Fill size={100} color="#9ac0e6" /><TbWind size={100} color="#9ac0e6" /></span> },
    { text: 'Patchy light drizzle', icon: <FiCloudDrizzle size={100} color="#9ac0e6" /> },
    { text: 'Light drizzle', icon: <FiCloudDrizzle size={100} color="#9ac0e6" /> },
    { text: 'Freezing drizzle', icon: <FiCloudDrizzle size={100} color="#9ac0e6" /> },
    { text: 'Heavy freezing drizzle', icon: <FiCloudDrizzle size={100} color="#9ac0e6" /> },
    { text: 'Patchy light rain', icon: <FaCloudRain size={100} color="#9ac0e6" /> },
    { text: 'Light rain', icon: <FaCloudRain size={100} color="#9ac0e6" /> },
    { text: 'Moderate rain at times', icon: <FaCloudRain size={100} color="#9ac0e6" /> },
    { text: 'Moderate rain', icon: <FaCloudRain size={100} color="#9ac0e6" /> },
    { text: 'Heavy rain at times', icon: <FaCloudRain size={100} color="#9ac0e6" /> },
    { text: 'Heavy rain', icon: <FaCloudRain size={100} color="#9ac0e6" /> },
    { text: 'Light freezing rain', icon: <WiHail size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy freezing rain', icon: <WiHail size={100} color="#9ac0e6" /> },
    { text: 'Light sleet', icon: <WiSleet size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy sleet', icon: <WiSleet size={100} color="#9ac0e6" /> },
    { text: 'Patchy light snow', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Light snow', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Patchy moderate snow', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Moderate snow', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Patchy heavy snow', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Heavy snow', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Ice pellets', icon: <WiHail size={100} color="#9ac0e6" /> },
    { text: 'Light rain shower', icon: <WiRain size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy rain shower', icon: <WiRain size={100} color="#9ac0e6" /> },
    { text: 'Torrential rain shower', icon: <WiRain size={100} color="#9ac0e6" /> },
    { text: 'Light sleet showers', icon: <WiSleet size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy sleet showers', icon: <WiSleet size={100} color="#9ac0e6" /> },
    { text: 'Light snow showers', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy snow showers', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Light showers of ice pellets', icon: <WiHail size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy showers of ice pellets', icon: <WiHail size={100} color="#9ac0e6" /> },
    { text: 'Patchy light rain with thunder', icon: <IoThunderstormOutline size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy rain with thunder', icon: <IoThunderstormOutline size={100} color="#9ac0e6" /> },
    { text: 'Patchy light snow with thunder', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
    { text: 'Moderate or heavy snow with thunder', icon: <TiWeatherSnow size={100} color="#9ac0e6" /> },
];



export const getWeatherIcon = (text) => {
    const icon = weatherConditions.filter(item => item.text === text);
    return icon.length === 0 ? { text, icon: <TiWeatherPartlySunny size={100} color="#9ac0e6" />} : icon[0].icon;
}