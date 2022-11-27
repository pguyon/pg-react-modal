import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({
  isOpen,
  hide,
  headerContent,
  bodyContent,
  buttonContent,
  overlayColor,
  modalColor,
  buttonBackground,
  buttonColor,
}) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <div className="modal__overlay" style={{ background: overlayColor }}>
            <div className="modal__wrapper">
              <div className="modal" style={{ background: modalColor }}>
                <div className="modal__header">
                  <h4>{headerContent}</h4>
                </div>
                <div className="modal__body">{bodyContent}</div>
                <span
                  className="close__button button"
                  style={{ background: buttonBackground, color: buttonColor }}
                  onClick={hide}
                >
                  {buttonContent}
                </span>
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
  button: PropTypes.string,
};

export default Modal;
