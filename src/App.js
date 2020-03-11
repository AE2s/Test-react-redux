import React from 'react';
import Counter from './containers/counterContainer';
import Todo from './containers/todoContainer';
import './App.css';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
      <Route path="/Counter" component={Counter} />
      <Route path="/Todo" component={Todo} />
    </div>
  );
}

export default App;
