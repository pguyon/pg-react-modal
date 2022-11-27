import React from "react";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

export default function App() {
  const { open, toggle, } = useModal();

  const test = () => {
        toggle();
  }

  return (
    <>
      <div className="App">
        <button className="modal-toggle" onClick={toggle}>
          Show modal
        </button>

        <Modal
          isOpen={open}
          actionButton={test}
          headerContent="Header content"
          bodyContent="Body content"
          buttonContent="close"
          overlayColor="grey"
          modalColor="lightgrey"
          buttonBackground="blue"
          buttonColor="white"
        />
      </div>
    </>
  );
}
