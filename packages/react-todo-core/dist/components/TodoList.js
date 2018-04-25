"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Todo = require("./Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TodoList = props => {
  return _react2.default.createElement("ul", null, props.todos.map(todo => _react2.default.createElement("li", {
    key: todo.id
  }, _react2.default.createElement(_Todo2.default, {
    id: todo.id,
    text: todo.title,
    completed: todo.completed,
    onToggle: props.onToggleTodo,
    onClear: props.onClearTodo
  }))));
};

TodoList.displayName = "TodoList";
TodoList.propTypes = {
  todos: _propTypes2.default.array.isRequired,
  onToggleTodo: _propTypes2.default.func.isRequired,
  onClearTodo: _propTypes2.default.func.isRequired
};
exports.default = TodoList;