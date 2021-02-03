import axios from 'axios';
import {userSubscriptionString, userTransactionString} from '../actionTypes';

import {API_URL} from '@env';

export const userTransaction = (id) => ({
  type: userTransactionString,
  payload: axios.get(API_URL + '/history/users?id=' + id),
});

export const userSubscribe = (id) => ({
  type: userSubscriptionString,
  payload: axios.get(API_URL + '/history/instance?id=' + id),
});

export const setHistory = (history = []) => ({
  type: 'SET_HISTORY',
  payload: {history},
});
