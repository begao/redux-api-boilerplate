import Constant from '../constants/constant.js';
import Immutable from 'immutable';

export default function device(state = [], action) {
  switch (action.type) {
    case Constant.ActionTypes.GET_DEVICES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}