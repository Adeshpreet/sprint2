import React, { useState } from "react";

function Calculator() {
  const [num, setNum] = useState("");
  function addToNum(e) {
    setNum(num + e.target.value);
  }
  function result() {
    setNum(eval(num));
  }
  return (
    <div className="middle">
      <h1>Calculator</h1>
      {num === "" ? <h1>{0}</h1> : <h1>{num}</h1>}

      <div className="king">
        <button value={"7"} onClick={addToNum}>
          7
        </button>
        <button value={"8"} onClick={addToNum}>
          8
        </button>
        <button value={"9"} onClick={addToNum}>
          9
        </button>
        <button value={"*"} onClick={addToNum}>
          *
        </button>
      </div>
      <div className="king">
        <button value={"4"} onClick={addToNum}>
          4
        </button>
        <button value={"5"} onClick={addToNum}>
          5
        </button>
        <button value={"6"} onClick={addToNum}>
          6
        </button>
        <button value={"-"} onClick={addToNum}>
          -
        </button>
      </div>
      <div className="king">
        <button value={"1"} onClick={addToNum}>
          1
        </button>
        <button value={"2"} onClick={addToNum}>
          2
        </button>
        <button value={"3"} onClick={addToNum}>
          3
        </button>
        <button value={"+"} onClick={addToNum}>
          +
        </button>
      </div>
      <div className="king">
        <button value={"."} onClick={addToNum}>
          .
        </button>
        <button value={"0"} onClick={addToNum}>
          0
        </button>
        <button value={"/"} onClick={addToNum}>
          /
        </button>
        <button value={"="} onClick={result}>
          =
        </button>
      </div>
      <div className="extra">
        <button value={"Clear"} onClick={() => setNum("")}>
          Clear
        </button>
        <button value={"Delete"} onClick={() => setNum(num.slice(0, -1))}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Calculator;
