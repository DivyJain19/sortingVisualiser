import React, { useState } from "react";
import "./App.css";
import Bubble from "./components/Bubble";
import Insertion from "./components/Insertion";
import Selection from "./components/Selection";
import QuickSort from "./components/QuickSort";
import Merge from "./components/Merge";

function App(props) {
  const [input, setInput] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [size, setSize] = useState(40);
  const arrayCreater = (inp) => {
    let arr = [];

    for (let i = 0; i < inp; i++) {
      arr.push({ value: Math.ceil(Math.random() * 20 + 1), color: "black" });
    }
    setInput(arr);
  };
  const callbackFn = (data) => {
    setInput(data);
  };
  return (
    <div style={{ padding: "4rem" }} className="main-container">
      <div className="inputs">
        <input
          className="array-inp"
          type="number"
          placeholder="Enter Length of Array"
          onChange={(e) => setSize(e.target.value)}
          min="1"
        />

        <input
          className="speed-inp"
          type="number"
          placeholder="Enter Speed in ms"
          onChange={(e) => setSpeed(e.target.value)}
          min="10"
        />

        <button
          className="btn-submit"
          onClick={() => {
            arrayCreater(size);
          }}
        >
          Generate Array
        </button>
      </div>

      <div className="btns">
        {props.algoName === "Bubble Sort" && (
          <Bubble array={input} changeArray={callbackFn} speed={speed} />
        )}

        {props.algoName === "Bubble Sort" && (
          <Insertion array={input} changeArray={callbackFn} speed={speed} />
        )}

        {props.algoName === "Bubble Sort" && (
          <Selection array={input} changeArray={callbackFn} speed={speed} />
        )}

        {props.algoName === "Bubble Sort" && (
          <QuickSort array={input} changeArray={callbackFn} speed={speed} />
        )}

        {props.algoName === "Bubble Sort" && (
          <Merge array={input} changeArray={callbackFn} speed={speed} />
        )}
      </div>

      <div className="bars">
        {input.length > 0 && (
          <div
            style={{ display: "flex", paddingTop: "50px", width: "100%" }}
            className="bars-inside"
          >
            {input.map((item) => {
              return (
                <div
                  key={Math.random()}
                  style={{
                    backgroundColor: item.color,
                    height: `${item.value}rem`,
                    width: "2%",
                    marginRight: "1%",
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
