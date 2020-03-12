import React, { useEffect } from 'react';

export default function Todo({ todosProps, todosData }) {
  useEffect(() => {
    console.log(todosProps);
    todosData();
  }, []);

  const { todos, loading, errors } = todosProps;

  if (loading) return <div> pas encore chargé</div>;
  else {
    if (errors) return <div> erreur récupération données</div>;
    else {
      return (
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
                {todos.map(todo => (
                  <tr key={todo.id}>
                    <td>{todo.userId} </td>
                    <td>{todo.title} </td>
                    <td>{todo.completed ? 'complete' : 'not complete'} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
