import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <tr key={todo.id}>
      <td>{todo.userId} </td>
      <td>{todo.title} </td>
      <td>{todo.completed ? 'complete' : 'not complete'} </td>
    </tr>
  );
}
