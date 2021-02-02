import axios from 'axios';
import {
  signupUserString,
  loginUserString,
  createPinString,
} from '../actionTypes';

import {API_URL} from '@env';

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

export const plus = (num) => ({
  type: 'PLUS',
  payload: {num},
});

export const set = () => ({
  type: 'GET',
});
