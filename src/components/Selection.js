import React, { useState } from "react";
import ArrayGenerator from "../ArrayGenerator";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let i, j, min_idx;
const Selection = (props) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const dataFromHomePage = (inputArr, speed) => {
    setArray([...inputArr]);
    setSpeed(speed);
  };
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  async function selectionSort(arr) {
    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length - 1; i++) {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j].value < arr[min_idx].value) {
          min_idx = j;
        }
      }
      // Swap the found minimum element with the first element
      arr[min_idx].color = "#9EB23B";
      arr[i].color = "#9EB23B";
      swap(arr, min_idx, i);
      await sleep(speed);
      setArray([...arr]);
      arr[min_idx].color = "black";
      arr[i].color = "black";

      //   props.changeArray([...arr]);
      arr[i].color = "yellow";
    }
    arr[arr.length - 1].color = "yellow";
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
          <button className="btn" onClick={() => selectionSort(array)}>
            Click Here To Sort
          </button>
        )}
      </div>
    </>
  );
};

export default Selection;
