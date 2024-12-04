import React from "react";
import "./squareButton.scss"

const SquareButton = (props: { text: string; link: string }) => {
  return (
    <div className="square-button">
      <button>
        <a href={props.link}>{props.text}</a>
      </button>
    </div>
  );
};

export default SquareButton;
