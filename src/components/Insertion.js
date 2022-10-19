import React, { useState } from "react";
import ArrayGenerator from "../ArrayGenerator";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let i, key, j;
const Insertion = (props) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const dataFromHomePage = (inputArr, speed) => {
    setArray([...inputArr]);
    setSpeed(speed);
  };
  async function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
      key = arr[i].value;
      j = i - 1;
      while (j >= 0 && arr[j].value > key) {
        arr[j].color = "#9EB23B";
        arr[j + 1].color = "#9EB23B";
        arr[j + 1].value = arr[j].value;
        await sleep(speed);
        setArray([...arr]);
        arr[j].color = "black";
        arr[j + 1].color = "black";
        j = j - 1;
      }

      arr[j + 1].value = key;
      await sleep(speed);
      setArray([...arr]);
    }
  }
  return (
    <>
      <ArrayGenerator callBackFn={dataFromHomePage} />
      <div className="bars">
        {array.length > 0 && (
          <div
            style={{ display: "flex", paddingTop: "50px", width: "100%" }}
            className="bars-inside"
          >
            {array.map((item) => {
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
      <div style={{ textAlign: "center", margin: "auto" }}>
        {array.length > 0 && (
          <button className="btn" onClick={() => insertionSort(array)}>
            Click Here To Sort
          </button>
        )}
      </div>
    </>
  );
};

export default Insertion;
