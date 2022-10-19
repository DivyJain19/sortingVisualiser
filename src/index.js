import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bubble from "./components/Bubble";
import QuickSort from "./components/QuickSort";
import Insertion from "./components/Insertion";
import Merge from "./components/Merge";
import Selection from "./components/Selection";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="bubble" element={<Bubble />} />
      <Route path="quick" element={<QuickSort />} />
      <Route path="insertion" element={<Insertion />} />
      <Route path="merge" element={<Merge />} />
      <Route path="selection" element={<Selection />} />
      <Route path="bubble" element={<Bubble />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
