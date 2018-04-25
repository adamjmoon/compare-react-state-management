"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilterLink = props => {
  if (props.active) {
    return _react2.default.createElement("span", null, props.children);
  }

  return _react2.default.createElement("a", {
    href: "",
    onClick: e => {
      e.preventDefault();
      props.onClick();
    }
  }, props.children);
};

FilterLink.displayName = "FilterLink";
FilterLink.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired,
  onClick: _propTypes2.default.func.isRequired
};
exports.default = FilterLink;