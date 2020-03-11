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
      return todos.map(todo => (
        <p key={todo.id}>
          UserId : {todo.userId} <br></br>
          Title : {todo.title} <br></br>
          Completed : {todo.completed} <br></br>
        </p>
      ));
    }
  }
}
