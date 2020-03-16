import expect from 'expect';
import * as actions from './counterActions';
import * as types from '../constants/counterConstants';

describe('actions', () => {
  it('should create an action to change a counter', () => {
    const expectedAction = {
      type: types.CHANGE_COUNTER,
      newCounter: 100,
    };
    expect(actions.ChangeCounter(100)).toEqual(expectedAction);
  });

  it('should create an action to initialize a counter', () => {
    const expectedAction = {
      type: types.INITIALIZE_COUNTER,
      newCounter: 0,
    };
    expect(actions.InitializeCounter()).toEqual(expectedAction);
  });
});
