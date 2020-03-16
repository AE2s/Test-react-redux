import expect from 'expect';
import * as actions from './todoActions';
import * as types from '../constants/todoConstants';

describe('actions', () => {
  it('should create an action to request a todo', () => {
    const expectedAction = {
      type: types.REQUEST_TODO,
      loading: true,
    };
    expect(actions.requestTodos()).toEqual(expectedAction);
  });
});
