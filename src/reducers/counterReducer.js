import * as types from '../constants/counterConstants';
const initialState = {
  counter: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case types.MINUS_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case types.CHANGE_COUNTER:
      return { ...state, counter: action.newCounter };
    case types.INITIALIZE_COUNTER:
      return { ...state, counter: 0 };
    default:
      return state;
  }
}
