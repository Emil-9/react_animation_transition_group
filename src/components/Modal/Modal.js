// here we are using the transition classes

import React from "react";
import "./Modal.css";
import CSSTransition from "react-transition-group/CSSTransition";

const modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };
  // [1, 2, 3].join() -> "123"
  // [1, 2, 3].join(" ") -> "1 2 3"
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      {(state) => {
        return (
          <div className={"Modal"}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </CSSTransition>
  );
};

export default modal;
