"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
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
  } = _ref;
  return isOpen ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__overlay",
    style: {
      background: overlayColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: {
      background: modalColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/_react.default.createElement("h4", null, headerContent), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal__close__button",
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__body"
  }, bodyContent), /*#__PURE__*/_react.default.createElement("span", {
    className: "button",
    style: {
      background: buttonBackground,
      color: buttonColor
    },
    onClick: actionButton
  }, buttonContent))))), document.body) : null;
};
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  actionButton: _propTypes.default.func.isRequired,
  headerContent: _propTypes.default.string,
  bodyContent: _propTypes.default.string,
  hide: _propTypes.default.func.isRequired,
  buttonContent: _propTypes.default.string.isRequired
};
var _default = Modal;
exports.default = _default;