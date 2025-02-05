import React from "react";
import { useState } from "react";

function AppLayout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-300">
        <h2>React Workshop</h2>
      </div>
    </>
  );
}