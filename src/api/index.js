import axios from 'axios';
import store from '/src/store';

const service = axios.create({
    baseURL: process.env.API_URL || 'https://154.38.175.203/api',
});

service.interceptors.request.use(
    (config) => {
        const token = store.getState().token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    });


export default service;

