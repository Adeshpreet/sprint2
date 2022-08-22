import "../App.css";
import { useState } from "react";

import React from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="middle">
      <h1>Functional Component Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setCount(0)}>Reset to 0</button>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      </div>
    </div>
  );
}

export default FunctionalComponent;
