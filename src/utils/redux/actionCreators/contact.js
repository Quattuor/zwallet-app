import * as actionTypes from '../actionTypes';

export const setReceiver = (id, username, photo, phone) => {
  return {
    type: actionTypes.SET_RECEIVER,
    payload: {
      id,
      username,
      photo,
      phone,
    },
  };
};
