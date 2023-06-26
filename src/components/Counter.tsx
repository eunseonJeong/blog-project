"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onPlusButton = () => {
    setCount((num) => num + 1);
  };

  const onMinusButton = () => {
    setCount((num) => num - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={onPlusButton}>➕</button>
      <button onClick={onMinusButton}>➖</button>
    </>
  );
}
