import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

const api = axios.create({
  baseURL: apiConfig.baseURL,
});

// Function to get all events
export const getAllEvents = async (token) => {
  try {
    const response = await api.get('/events', {
      headers: {
        Authorization: Bearer ${token}
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to fetch events');
  }
};

// Function to get a single event by ID
export const getEventById = async (id, token) => {
  try {
    const response = await api.get(/events/${id}, {
      headers: {
        Authorization: Bearer ${token}
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to fetch the event');
  }
};

// Function to create a new event
export const createEvent = async (eventData, token) => {
  try {
    const response = await api.post('/events', eventData, {
      headers: {
        Authorization: Bearer ${token},
        'Content-Type': 'multipart/form-data' // if sending files
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to create event');
  }
};

// Function to update an event by ID
export const updateEventById = async (id, eventData, token) => {
  try {
    const response = await api.put(/events/${id}, eventData, {
      headers: {
        Authorization: Bearer ${token}
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to update the event');
  }
};

// Function to delete an event by ID
export const deleteEventById = async (id, token) => {
  try {
    const response = await api.delete(/events/${id}, {
      headers: {
        Authorization: Bearer ${token}
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to delete the event');
  }
};