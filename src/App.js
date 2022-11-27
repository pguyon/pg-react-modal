import React from "react";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

export default function App() {
  const { open, toggle } = useModal();

  return (
    <>
      <div className="App">
        <button className="modal-toggle" onClick={toggle}>
          Show modal
        </button>

        <Modal isOpen={open} hide={toggle} headerContent='Header content' bodyContent="Body content" buttonContent='Button Content'/>
      </div>
    </>
  );
}
