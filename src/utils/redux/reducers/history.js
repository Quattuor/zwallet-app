import {
  userTransactionString,
  userSubscriptionString,
  pending,
  rejected,
  fulfilled,
} from '../actionTypes';

const initialState = {
  users: {},
  instance: {},
  history: [],
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
  // num: 0,
};

const historyReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case userTransactionString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case userTransactionString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
        users: {},
      };
    case userTransactionString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        users: action.payload.data,
        err: {},
      };

    case userSubscriptionString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case userSubscriptionString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
        users: {},
      };
    case userSubscriptionString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        instance: action.payload.data,
        err: {},
      };

    case 'SET_HISTORY':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        history: action.payload.history,
        err: {},
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default historyReducer;
