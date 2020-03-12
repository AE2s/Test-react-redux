import React from 'react';
import Error from '../Error';
import TodoItem from '../TodoItem';

export default function TodoList({ errors, datas }) {
  return errors ? (
    <Error></Error>
  ) : (
    <div>
      <h1 class="display-4">Test de react redux Todo</h1>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {datas.map(todo => (
              <TodoItem todo={todo}></TodoItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
