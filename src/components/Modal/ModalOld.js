// this component is the old way without adding the transition classes 

import React from "react";

import "./Modal.css";
import Transition from "react-transition-group/Transition";

const modalOld = (props) => {
  const animationTiming = { 
    enter: 400, 
    exit: 1000
  }
  // [1, 2, 3].join() -> "123"
  // [1, 2, 3].join(" ") -> "1 2 3"
  return (
    <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modalOld;
