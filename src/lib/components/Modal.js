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
  mainBackground,
  modalBackground,
  buttonBackground,
  buttonColor,
  hide
}) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <div className="main" style={{ background: mainBackground }}>
            <div className="wrapper">
              <div className="modal" style={{ background: modalBackground }}>
                <div className="header">
                  <h4>{headerContent}</h4>
                  <button
                    type="button"
                    className="close__button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="body">{bodyContent}</div>
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
