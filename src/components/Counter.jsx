import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div className=" flex gap-8 border-2 rounded-lg px-6 py-4 w-fit">
      <button
        onClick={() => setCount((count) => count - 1)}
        disabled={count === 1}
        className={` ${count === 1 && "opacity-50 cursor-not-allowed"}`}
      >
        <Minus />
      </button>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        <Plus />
      </button>
    </div>
  );
};

export default Counter;
