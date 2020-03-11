import * as types from '../constants/todoConstants';

export const requestTodos = () => ({
  type: types.REQUEST_TODO,
  loading: true,
});
export const requestTodosSuccess = todos => ({
  type: types.REQUEST_TODO_SUCCESS,
  todos,
  loading: false,
});
export const requestTodosError = error => ({
  type: types.REQUEST_TODO_ERROR,
  loading: false,
  error,
});

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos());

    return fetch('http://www.mocky.io/v2/5e67bef33100005c00230c56', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error - 404 Not Found');
        }

        return response.json();
      })
      .then(todos => {
        dispatch(requestTodosSuccess(todos));
      })
      .catch(error => {
        console.log(error);
        dispatch(requestTodosError(error));
      });
  };
};
