import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({
  isOpen,
  actionButton,
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
                  className="button"
                  style={{ background: buttonBackground, color: buttonColor }}
                  onClick={actionButton}
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
  actionButton: PropTypes.func.isRequired,
  headerContent: PropTypes.string,
  bodyContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired
};

export default Modal;
