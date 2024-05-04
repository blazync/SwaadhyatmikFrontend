import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

const api = axios.create({
  baseURL: apiConfig.baseURL,
});

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/user/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Registration failed');
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/user/login', credentials);
    return response.data.token;
  } catch (error) {
    throw new Error(error.response.data.error || 'Login failed');
  }
};