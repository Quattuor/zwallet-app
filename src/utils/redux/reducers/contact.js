import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  id: null,
  username: null,
  photo: null,
  phone: null,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_RECEIVER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        photo: action.payload.photo,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};

export default contactReducer;
