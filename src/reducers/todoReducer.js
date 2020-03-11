import * as types from '../constants/todoConstants';
const initialState = {
  todos: [],
  loading: false,
  errors: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_TODO:
      return { ...state, loading: true };
    case types.REQUEST_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.todos };
    case types.REQUEST_TODO_ERROR:
      return { ...state, loading: false, errors: action.error };
    default:
      return state;
  }
}
