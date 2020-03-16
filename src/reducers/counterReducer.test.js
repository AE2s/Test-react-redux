import reducer from './counterReducer';
import * as types from '../constants/counterConstants';

const initialState = {
  counter: 5,
};

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      counter: 0,
    });
  });

  it('should handle ADD_COUNTER', () => {
    expect(
      reducer(undefined, {
        type: types.ADD_COUNTER,
      }),
    ).toEqual({
      counter: 1,
    });
  });

  it('should handle ADD_COUNTER With counter to 5', () => {
    expect(
      reducer(initialState, {
        type: types.ADD_COUNTER,
      }),
    ).toEqual({
      counter: 6,
    });
  });

  it('should handle MINUS_COUNTER', () => {
    expect(
      reducer(undefined, {
        type: types.MINUS_COUNTER,
      }),
    ).toEqual({
      counter: -1,
    });
  });

  it('should handle MINUS_COUNTER With counter to 5', () => {
    expect(
      reducer(initialState, {
        type: types.MINUS_COUNTER,
      }),
    ).toEqual({
      counter: 4,
    });
  });

  it('should handle CHANGE_COUNTER', () => {
    expect(
      reducer(undefined, {
        type: types.CHANGE_COUNTER,
        newCounter: 100,
      }),
    ).toEqual({
      counter: 100,
    });
  });

  it('should handle INITIALIZE_COUNTER', () => {
    expect(
      reducer(initialState, {
        type: types.INITIALIZE_COUNTER,
      }),
    ).toEqual({
      counter: 0,
    });
  });
});
