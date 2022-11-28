"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useModal = () => {
  const [open, setOpen] = (0, _react.useState)(false);
  function toggle() {
    setOpen(!open);
  }
  return {
    open,
    toggle
  };
};
var _default = useModal;
exports.default = _default;