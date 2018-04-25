"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TODOS_QUERY = undefined;

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TODOS_QUERY = exports.TODOS_QUERY = _graphqlTag2.default`
  query {
    todos {
      id
      title
      completed
    }
  }
`;