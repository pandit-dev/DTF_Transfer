import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div className=" flex gap-8 border-2 rounded-lg  w-fit">
      <button
        onClick={() => setCount((count) => count - 1)}
        disabled={count === 1}
        className={`hover:bg-gray-200 py-4 px-6 rounded-lg ${count === 1 && ("cursor-not-allowed opacity-50")}`}
        >
        <Minus />
      </button>
      <button>{count}</button>
      <button 
      onClick={() => setCount((count) => count + 1)}
      className="hover:bg-gray-200 py-4 px-6 rounded-lg"
      >
        <Plus />
      </button>
    </div>
  );
};

export default Counter;
