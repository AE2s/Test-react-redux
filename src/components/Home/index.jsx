import React from 'react';
import propTypes from 'prop-types';

export default function Home({ counter, increment, decrement, changeCounter, initializeCounter }) {
  const newCounter = 100;
  return (
    <div>
      <h1 class="display-4">Test de react redux counter</h1>
      <label> value of count : {counter}</label>
      <br></br>
      <button id="addCounter" class="btn btn-success" onClick={increment}>
        +
      </button>
      <button id="MinusCounter" class="btn btn-secondary" onClick={() => decrement()}>
        -
      </button>
      <br></br>
      <button id="ChangeCounter" class="btn btn-light" onClick={() => changeCounter(newCounter)}>
        Change counter to {newCounter}
      </button>
      <br></br>
      <button id="InitializeCounter" class="btn btn-info" onClick={() => initializeCounter()}>
        Initialize counter to 0
      </button>
    </div>
  );
}

Home.propTypes = {
  counter: propTypes.number.isRequired,
  increment: propTypes.func,
  decrement: propTypes.func,
  changeCounter: propTypes.func,
  initializeCounter: propTypes.func,
};
