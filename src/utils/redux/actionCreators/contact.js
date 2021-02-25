import * as actionTypes from '../actionTypes';

export const setReceiver = (id_user, username, photo, phone) => {
  return {
    type: actionTypes.SET_RECEIVER,
    payload: {
      id_user,
      username,
      photo,
      phone,
    },
  };
};
