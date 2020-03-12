import React from 'react';
import Error from '../Error';
import { Link } from 'react-router-dom';

export default function TodoDetails({ todo }) {
  console.log(todo);
  return !todo ? (
    <Error></Error>
  ) : (
    <div>
      <h3> Details of : {todo.title} </h3>
      <ul className="list-group">
        <li className="list-group-item">{todo.userId}</li>
        <li className="list-group-item">{todo.title}</li>
        <li className="list-group-item">{todo.completed ? 'complete' : 'not complete'}</li>
      </ul>
      <Link to="/Todo">Retour list des todos</Link>
    </div>
  );
}
