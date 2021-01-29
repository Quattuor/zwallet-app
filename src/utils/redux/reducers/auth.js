import {} from '../actionTypes';

const initialState = {
  num: 0,
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

    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
