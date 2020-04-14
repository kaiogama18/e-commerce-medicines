"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
import React from "react";
var __jsx = React.createElement;

function Categorys(props) {
  return props.category.map(function (aux) {
    return /*#__PURE__*/React.createElement("button", {
      key: aux.id,
      className: "flex flex-col mx-2 items-center justify-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex w-16 h-16 rounded-full border-2 border-teal-400 bg-white shadow-teal-400"
    }, /*#__PURE__*/React.createElement("img", {
      src: aux.src,
      alt: aux.name
    })), /*#__PURE__*/React.createElement("p", {
      className: "mt-2 text-xs uppercase"
    }, aux.name));
  });
}

var Category = function Category() {
  var data = [{
    id: "001",
    name: "Suplemento",
    src: "/suplementos.png"
  }, {
    id: "002",
    name: "Vitaminas",
    src: "/suplementos.png"
  }, {
    id: "003",
    name: "Hidratante",
    src: "/suplementos.png"
  }, {
    id: "004",
    name: "Pediatria",
    src: "/suplementos.png"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "flex items-center justify-center overflow-hidden mb-5"
  }, /*#__PURE__*/React.createElement(Categorys, {
    category: data
  }));
};

var _default = Category;
exports["default"] = _default;