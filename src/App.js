import React from "react";

import { Modal } from "./lib";
import useModal from "./lib/hooks/useModal";

export default function App() {
  const { open, toggle } = useModal();

  const test = () => {
    toggle();
  };

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
          mainBackground="grey"
          modalBackground="lightgrey"
          buttonBackground="blue"
          buttonColor="white"
          hide={toggle}
        />
      </div>
    </>
  );
}
