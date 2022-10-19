import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./SortingCard.css";
import { FaArrowRight } from "react-icons/fa";
import AlgoDescriptionModal from "./AlgoDescriptionModal";
import { Link } from "react-router-dom";
const CardMain = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <div className="cnt">
      {showModal && (
        <AlgoDescriptionModal
          title={props.title}
          description={props.description}
          onConfirm={handleClick}
          complexity={props.complexity}
        />
      )}
      <CardContent
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="div">
          {props.algoName}
        </Typography>
        <Typography variant="h4" component="div">
          ({props.st})
        </Typography>
        <div
          style={{
            margin: "3rem",
            padding: "1rem",
            borderBottom: "1px solid black",
          }}
        ></div>
        <button onClick={handleClick}>
          Description <FaArrowRight />
        </button>
        <Link to={`/${props.file}`}>
          <button>
            Visual Representation
            <FaArrowRight />
          </button>
        </Link>
      </CardContent>
    </div>
  );
};

export default function SortingCard(props) {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card
        variant="outlined"
        style={{
          backgroundColor: "#cfd3ce",
          borderRadius: "20px",
          border: "solid 2px black",
        }}
      >
        <CardMain
          title={props.title}
          description={props.description}
          algoName={props.algoName}
          complexity={props.complexity}
          file={props.file}
          st={props.st}
        />
      </Card>
    </Box>
  );
}
