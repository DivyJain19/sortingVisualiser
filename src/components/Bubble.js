import React, { useState } from "react";
import ArrayGenerator from "../ArrayGenerator";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let i;
let j;

const Bubble = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const dataFromHomePage = (inputArr, speed) => {
    setArray([...inputArr]);
    setSpeed(speed);
  };

  async function bblSort(arr) {
    console.log(arr);
    for (i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j].value > arr[j + 1].value) {
          arr[j].color = "#9EB23B";
          arr[j + 1].color = "#9EB23B";
          var temp = arr[j].value;
          arr[j].value = arr[j + 1].value;
          arr[j + 1].value = temp;
          await sleep(speed);
          setArray([...arr]);
          arr[j].color = "black";
          arr[j + 1].color = "black";
        }
      }
      arr[arr.length - 1 - i].color = "purple";
    }
    console.log(arr);
  }
  return (
    <div>
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
          <button className="btn" onClick={() => bblSort(array)}>
            Click Here To Sort
          </button>
        )}
      </div>
    </div>
  );
};

export default Bubble;
