import React from "react";
import propTypes from "prop-types";

export default function Home({
  counter,
  increment,
  decrement,
  changeCounter,
  initializeCounter
}) {
  const newCounter = 100;
  return (
    <div>
      <h1>Test de react redux</h1>
      <label> value of count : {counter}</label>
      <br></br>
      <button id="addCounter" onClick={() => increment()}>
        +
      </button>
      <br></br>
      <button id="MinusCounter" onClick={() => decrement()}>
        -
      </button>
      <br></br>
      <button id="ChangeCounter" onClick={() => changeCounter(newCounter)}>
        Change counter to {newCounter}
      </button>
      <br></br>
      <button id="InitializeCounter" onClick={() => initializeCounter()}>
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
  initializeCounter: propTypes.func
};
