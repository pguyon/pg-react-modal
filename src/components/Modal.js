import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './Modal.css'

const Modal = ({ isOpen, hide }) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <div className="modal__overlay">
            <div className="modal__wrapper">
              <div className="modal">
                <div className="modal__header">
                  <h4>Modal Header</h4>
                  <button
                    type="button"
                    className="modal__close__button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal__body">Hello Modal Here</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Modal;
