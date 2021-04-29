import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => {
        return prev + 1;
      });
    }
  };
  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          setCount(initialState);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button onClick={incrementFive}>5</button>
    </div>
  );
};

export default HookCounterTwo;
