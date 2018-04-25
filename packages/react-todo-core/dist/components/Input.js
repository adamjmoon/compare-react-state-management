"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = props => _react2.default.createElement("input", {
  type: "text",
  onKeyUp: e => {
    if (e.keyCode === 13 && // key up is enter key
    e.target.value.trim() // value is more than empty string
    ) {
        props.onSubmit(e.target.value);
        e.target.value = ""; // clear input
      }
  }
});

Input.displayName = "Input";
Input.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired
};
exports.default = Input;