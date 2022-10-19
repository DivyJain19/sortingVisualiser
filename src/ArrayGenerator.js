import React, { useState } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import "./App.css";
function ArrayGenerator(props) {
  const [input, setInput] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [size, setSize] = useState(40);
  const arrayCreater = (inp) => {
    let arr = [];

    for (let i = 0; i < inp; i++) {
      arr.push({ value: Math.ceil(Math.random() * 20 + 1), color: "black" });
    }
    props.callBackFn(arr, speed);
  };

  return (
    <div
      style={{
        padding: "4rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Grid
          container
          spacing={2}
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              className="array-inp"
              type="number"
              placeholder="Enter Length of Array"
              onChange={(e) => setSize(e.target.value)}
              min="1"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              className="speed-inp"
              type="number"
              placeholder="Enter Speed in ms"
              onChange={(e) => setSpeed(e.target.value)}
              min="10"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="btn-submit"
              onClick={() => {
                arrayCreater(size);
              }}
            >
              Generate Array
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ArrayGenerator;
