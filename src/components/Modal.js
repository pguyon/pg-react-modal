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
  hide
}) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <div className="modal__overlay" style={{ background: overlayColor }}>
            <div className="modal__wrapper">
              <div className="modal" style={{ background: modalColor }}>
                <div className="modal__header">
                  <h4>{headerContent}</h4>
                  <button
                    type="button"
                    className="modal__close__button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
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
  hide: PropTypes.func.isRequired,
  buttonContent: PropTypes.string.isRequired
};

export default Modal;
