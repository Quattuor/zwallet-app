import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  id_user: null,
  username: null,
  photo: null,
  phone: null,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_RECEIVER:
      return {
        ...state,
        id_user: action.payload.id_user,
        username: action.payload.username,
        photo: action.payload.photo,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};

export default contactReducer;
