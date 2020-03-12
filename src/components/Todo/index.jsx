import React, { useEffect } from 'react';
import Loading from '../Loading';
import TodoList from '../TodoList';

export default function Todo({ todosProps, todosData }) {
  useEffect(() => {
    console.log(todosProps);
    todosData();
  }, []);

  const { todos, loading, errors } = todosProps;

  return loading ? <Loading></Loading> : <TodoList errors={errors} datas={todos}></TodoList>;
}
