import axios from 'axios';
import store from '../store';

const service = axios.create({
    baseURL: process.env.API_URL || 'https://riwaya.rf.gd/api',
});

service.interceptors.request.use(
    (config) => {
        const token = store.getState().user?.token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    });


export default service;

