import reducer from './todoReducer';
import * as types from '../constants/todoConstants';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
      loading: false,
      errors: null,
    });
  });

  it('should handle REQUEST_TODO', () => {
    expect(
      reducer(undefined, {
        type: types.REQUEST_TODO,
      }),
    ).toEqual({
      todos: [],
      errors: null,
      loading: true,
    });
  });

  it('should handle REQUEST_TODO_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.REQUEST_TODO_SUCCESS,
        todos: ['new todo'],
      }),
    ).toEqual({
      todos: ['new todo'],
      loading: false,
      errors: null,
    });
  });

  it('should handle REQUEST_TODO_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.REQUEST_TODO_ERROR,
        error: 'error',
      }),
    ).toEqual({
      todos: [],
      loading: false,
      errors: 'error',
    });
  });
});
