"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Todo = props => _react2.default.createElement("div", null, _react2.default.createElement("input", {
  type: "checkbox",
  checked: props.completed,
  onChange: () => props.onToggle(props.id)
}), _react2.default.createElement("label", null, props.text), _react2.default.createElement("button", {
  onClick: () => props.onClear(props.id)
}, "x"));

Todo.displayName = "Todo";
Todo.propTypes = {
  id: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  completed: _propTypes2.default.bool.isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onClear: _propTypes2.default.func.isRequired
};
exports.default = Todo;