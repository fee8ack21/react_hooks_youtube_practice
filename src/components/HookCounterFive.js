import React, { useState, useEffect } from "react";

const HookCounterFive = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  //
  const [name, setName] = useState("");
  // runs after every render
  useEffect(() => {
      console.log('update title')
    document.title = `You click ${count} times`;
  },[count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default HookCounterFive;
