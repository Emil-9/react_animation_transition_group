import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }))
          }
          className="button"
        >
          toggle
        </button>
        <br />
        {/* in attribute is to say what state should be involved in the transition */}
        {/* in: has 4 states -> {entring, entered, exiting, exited} */}
        {/* the 300ms is the transition time between each in state change */}
        {/* mountOnEnter will add the element on enter and unmountOnExit will remove it on exit */}
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "red",
                margin: "auto",
                opacity: state === "exiting" ? 0 : 1,
                transition: "all 0.4s ease-out",
              }}
            >
              toggle block
            </div>
          )}
        </Transition>
        <br />
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
