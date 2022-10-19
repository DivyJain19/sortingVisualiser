import React from "react";
import classes from "./AlgoDescriptionModal.module.css";

const AlgoDescriptionModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2 style={{ fontSize: "2em", textAlign: "center" }}>
            {props.title}
          </h2>
        </header>
        <div className={classes.content}>
          <p
            style={{
              fontSize: "1.2em",
              textAlign: "center",
              color: "white",
            }}
          >
            {props.description}
          </p>
        </div>
        <div className={classes.content}>
          <h3
            style={{ fontSize: "1.2em", textAlign: "center", color: "white" }}
          >
            {props.complexity}
          </h3>
        </div>
        <footer className={classes.actions}>
          <button className={classes.confirmBtn} onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AlgoDescriptionModal;
