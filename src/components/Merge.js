import React, { useState } from "react";
import ArrayGenerator from "../ArrayGenerator";
import "../App.css";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const Merge = (props) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const dataFromHomePage = (inputArr, speed) => {
    setArray([...inputArr]);
    setSpeed(speed);
  };
  async function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i].value;
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j].value;

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k].color = "#9EB23B";
        arr[k].value = L[i];
        i++;
        await sleep(speed);
        setArray([...arr]);
        arr[k].color = "black";
      } else {
        arr[k].value = R[j];
        arr[k].color = "#9EB23B";
        j++;
        await sleep(speed);
        setArray([...arr]);
        arr[k].color = "black";
      }
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k].color = "#9EB23B";
      arr[k].value = L[i];
      await sleep(speed);
      setArray([...arr]);
      arr[k].color = "black";
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      await sleep(speed);
      setArray([...arr]);
      arr[k].value = R[j];
      j++;
      k++;
    }
  }

  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted */
  async function mergeSort(arr, l, r) {
    if (l >= r) {
      return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
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
      {array.length > 0 && (
        <div style={{ textAlign: "center", margin: "auto" }}>
          <button
            className="btn"
            onClick={() => mergeSort(array, 0, array.length - 1)}
          >
            Click Here To Sort
          </button>
        </div>
      )}
    </>
  );
};

export default Merge;
