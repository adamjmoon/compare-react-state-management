"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _graphqlRequest = require("graphql-request");

const client = new _graphqlRequest.GraphQLClient("http://localhost:8081/graphql/"); // NOTE: used by all apps except for apollo

function request(query, variables) {
  const rawQuery = query.loc.source.body;
  return client.request(rawQuery, variables);
}