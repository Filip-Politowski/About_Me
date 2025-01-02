import React from "react";
import "./squareButton.scss";

const SquareButton = (props: {
  text: string;
  onClick: () => void; 
}) => {
  return (
    <div className="square-button">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default SquareButton;
