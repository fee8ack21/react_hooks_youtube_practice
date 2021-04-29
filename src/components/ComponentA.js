import React, { useContext } from "react";
import { CountContext } from "../App";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA - {countContext.countState}
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
      {/* <ComponentB /> */}
    </div>
  );
};

export default ComponentA;
