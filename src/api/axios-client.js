import axios from 'axios';

const url = process.env.REACT_APP_API_URL
const token = process.env.REACT_APP_API_TOKEN

export const axiosClient = axios.create({
    baseURL: url,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const API = {
    GET: (endpoint) => axiosClient.get(endpoint),
    POST: (endpoint, data) => axiosClient.post(endpoint, data),
    PUT: (endpoint, data) => axiosClient.put(endpoint, data),
    DELETE: (endpoint) => axiosClient.delete(endpoint),
}; 
