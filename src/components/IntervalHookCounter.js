import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  //   const tick = () => {
  //     setCount(count + 1);
  //   };
  //   useEffect(() => {
  //     const interval = setInterval(tick, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //     // must to add count to dependency array
  //   }, [count]);

  const tick = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default IntervalHookCounter;
