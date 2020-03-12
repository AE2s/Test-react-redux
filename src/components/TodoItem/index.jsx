import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoItem({ todo }) {
  return (
    <tr key={todo.id}>
      <td>{todo.userId}</td>
      <td>
        <Link to={`/Todo/${todo.id}`}>{todo.title}</Link>
      </td>
      <td>{todo.completed ? 'complete' : 'not complete'} </td>
    </tr>
  );
}
