import React, { useState } from "react";
import ArrayGenerator from "../ArrayGenerator";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let pi, pivot;
const QuickSort = (props) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const dataFromHomePage = (inputArr, speed) => {
    setArray([...inputArr]);
    setSpeed(speed);
  };
  function swap(arr, i, j) {
    let temp = arr[i].value;
    arr[i].value = arr[j].value;
    arr[j].value = temp;
  }

  async function partition(arr, low, high) {
    pivot = arr[high].value;

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      if (arr[j].value < pivot) {
        i++;
        arr[i].color = "#9EB23B";
        arr[j].color = "#839AA8";
        swap(arr, i, j);
        await sleep(speed);
        setArray([...arr]);
        arr[i].color = "black";
        arr[j].color = "black";
      }
    }
    arr[i + 1].color = "#9EB23B";
    arr[high].color = "pink";
    swap(arr, i + 1, high);
    await sleep(speed);
    setArray([...arr]);
    arr[i + 1].color = "black";
    arr[high].color = "black";
    return i + 1;
  }
  async function quickSort(arr, low, high) {
    if (low < high) {
      pi = await partition(arr, low, high);

      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
    // props.changeArray([...arr]);
    // await sleep(1000);
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
          <button
            className="btn"
            onClick={() => quickSort(array, 0, array.length - 1)}
          >
            Click Here To Sort
          </button>
        )}
      </div>
    </>
  );
};

export default QuickSort;
// import React from "react";
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// let pi, pivot;
// const QuickSort = (props) => {
//   async function partition(arr, low, high) {
//     console.log(arr, high);
//     let temp;
//     let pivot = arr[high].value;

//     // index of smaller element
//     let i = low - 1;
//     for (let j = low; j <= high - 1; j++) {
//       // If current element is smaller
//       // than or equal to pivot
//       if (arr[j].value <= pivot) {
//         i++;

//         // swap arr[i] and arr[j]
//         arr[i].color = "red";
//         arr[j].color = "red";
//         temp = arr[i].value;
//         arr[i].value = arr[j].value;
//         arr[j].value = temp;
//         await sleep(props.speed);
//         props.changeArray([...arr]);
//         arr[i].color = "black";
//         arr[j].color = "black";
//       }
//     }

//     // swap arr[i+1] and arr[high]
//     // (or pivot)

//     temp = arr[i + 1].value;
//     arr[i + 1].value = arr[high].value;
//     arr[high].value = temp;

//     return i + 1;
//   }

//   /* A[] --> Array to be sorted,
//     l --> Starting index,
//     h --> Ending index */
//   async function quickSortIterative(arr, l, h) {
//     // Create an auxiliary stack
//     let stack = new Array(h - l + 1);
//     stack.fill(0);

//     // initialize top of stack
//     // arr[l].color
//     let top = -1;

//     // push initial values of l and h to
//     // stack
//     stack[++top] = l;
//     stack[++top] = h;

//     // Keep popping from stack while
//     // is not empty
//     while (top >= 0) {
//       // Pop h and l
//       h = stack[top--];
//       l = stack[top--];

//       // Set pivot element at its
//       // correct position in
//       // sorted array
//       let p = await partition(arr, l, h);

//       // If there are elements on
//       // left side of pivot, then
//       // push left side to stack
//       if (p - 1 > l) {
//         stack[++top] = l;
//         stack[++top] = p - 1;
//       }

//       // If there are elements on
//       // right side of pivot, then
//       // push right side to stack
//       if (p + 1 < h) {
//         stack[++top] = p + 1;
//         stack[++top] = h;
//       }
//       // await sleep(200);
//       // props.changeArray([...arr]);
//       // await sleep(200);
//       // props.changeArray([...arr]);
//     }
//   }

//   // Function calling

//   return (
//     <button
//       className="btn"
//       onClick={() => quickSortIterative(props.array, 0, props.array.length - 1)}
//     >
//       QuickSort
//     </button>
//   );
// };

// export default QuickSort;
