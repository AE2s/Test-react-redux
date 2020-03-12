import React from 'react';
import Counter from './containers/counterContainer';
import Todo from './containers/todoContainer';
import './App.css';
import { Route, Link } from 'react-router-dom';
import TodoDetails from './containers/todoDetailsContainer';

function App() {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/counter">Counter</Link>
        </li>
        <li className="list-group-item">
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
      <Route path="/Counter" component={Counter} />
      <Route path="/Todo/:id" component={TodoDetails} />
      <Route exact path="/Todo" component={Todo} />
    </div>
  );
}

export default App;
