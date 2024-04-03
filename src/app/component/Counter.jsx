'use client';

import { useState } from "react";



export default function Counter() {
  const [count, setCount] = useState(0);
const increment = () => {
    setCount(count + 1);
};
const decrement = () => {
  setCount(count - 1);
};

const reset = () => {
  setCount(0);
};


  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
