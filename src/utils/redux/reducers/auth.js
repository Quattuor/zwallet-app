import {
  loginUserString,
  signupUserString,
  createPinString,
  getUserProfile,
  logoutUserString,
  pending,
  rejected,
  fulfilled,
} from '../actionTypes';

const initialState = {
  login: {},
  signup: {},
  pin: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
  // num: 0,
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET':
      return {
        ...prevState,
      };
    case 'PLUS':
      return {
        ...prevState,
        num: action.payload.num + 1,
      };

    case signupUserString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case signupUserString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
        signup: {},
      };
    case signupUserString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        signup: action.payload.data,
        err: {},
      };

    case loginUserString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case loginUserString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
        login: {},
      };
    case loginUserString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        login: action.payload.data,
        err: {},
      };

    // case logoutUserString + pending:
    //   return {
    //     ...prevState,
    //     isPending: true,
    //     isRejected: false,
    //     isFulfilled: false,
    //   };
    // case logoutUserString + rejected:
    //   return {
    //     ...prevState,
    //     isPending: false,
    //     isRejected: true,
    //     err: action.payload.data,
    //     login: {},
    //   };
    case logoutUserString:
      // if(action.payload.data)
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        login: {},
        err: {},
      };

    case createPinString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case createPinString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
        pin: {},
      };
    case createPinString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        pin: action.payload.data,
        err: {},
      };

    case 'OTP' + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'OTP' + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
        pin: {},
      };
    case 'OTP' + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        send: action.payload.data,
        err: {},
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
