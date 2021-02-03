import axios from 'axios';
import {
  signupUserString,
  loginUserString,
  createPinString,
  getUserProfile,
} from '../actionTypes';

import {API_URL} from '@env';
// const API_URL = '192.168.1.10:2005';

export const signupUser = (data) => ({
  type: signupUserString,
  payload: axios.post(API_URL + '/auth/signup', data),
});

export const loginUser = (data) => ({
  type: loginUserString,
  payload: axios.post(API_URL + '/auth/login', data),
});

export const createPin = (data) => ({
  type: createPinString,
  payload: axios.post(API_URL + '/auth/pin', data),
});

export const getUser = (id) => ({
  type: getUserProfile,
  payload: axios.get(`${API_URL}/user/${id}`),
});

export const plus = (num) => ({
  type: 'PLUS',
  payload: {num},
});

export const set = () => ({
  type: 'GET',
});
