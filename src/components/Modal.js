import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, hide, headerContent, bodyContent, buttonContent}) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <div className="modal__overlay">
            <div className="modal__wrapper">
              <div className="modal">
                <div className="modal__header">
                  <h4>{headerContent}</h4>              
                </div>
                <div className="modal__body">{bodyContent}</div>
                
                <span className="close__button button" onClick={hide}>{buttonContent}</span>
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
  headerContent: PropTypes.string,
  bodyContent: PropTypes.string,
  button: PropTypes.string
};

export default Modal;
