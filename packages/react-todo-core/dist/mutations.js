"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLEAR_TODO_MUTATION = exports.TOGGLE_TODO_MUTATION = exports.ADD_TODO_MUTATION = undefined;

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ADD_TODO_MUTATION = exports.ADD_TODO_MUTATION = _graphqlTag2.default`
  mutation($title: String!) {
    addTodo(title: $title) {
      id
      title
      completed
    }
  }
`;
const TOGGLE_TODO_MUTATION = exports.TOGGLE_TODO_MUTATION = _graphqlTag2.default`
  mutation($id: String!) {
    toggleTodo(id: $id) {
      id
      completed
    }
  }
`;
const CLEAR_TODO_MUTATION = exports.CLEAR_TODO_MUTATION = _graphqlTag2.default`
  mutation($id: String!) {
    clearTodo(id: $id) {
      id
    }
  }
`;