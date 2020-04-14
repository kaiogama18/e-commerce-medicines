"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
import React from "react";
var __jsx = React.createElement;

function Search() {
  return /*#__PURE__*/React.createElement("form", {
    className: "flex shadow-lg mb-5 mx-5"
  }, /*#__PURE__*/React.createElement("button", {
    className: "material-icons bg-default text-white font-bold py-1 px-2 rounded-l-md"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    className: "w-full border border-default bg-gray-200 rounded-r-md p-1",
    type: "text",
    required: true
  }));
}

var _default = Search;
exports["default"] = _default;