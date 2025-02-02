'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import {store} from '../../../redux/store'; // Adjust the import path as needed
import { setSpinnerState } from '@/redux/spinnerSlice';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL here
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request started:', config);
    store.dispatch(setSpinnerState({
        show: true
    })); // Dispatch action to show loading
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    store.dispatch(setSpinnerState({
        show: false
    }));
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Request ended:', response);
    store.dispatch(setSpinnerState({
        show: false
    }));
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    store.dispatch(setSpinnerState({
        show: false
    })); 
    return Promise.reject(error);
  }
);

export default axiosInstance;