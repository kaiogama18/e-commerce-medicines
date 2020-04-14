"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _head = _interopRequireDefault(require("next/head"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _navbar = _interopRequireDefault(require("./navbar"));

var _footer = _interopRequireDefault(require("./footer"));

import React from "react";
var __jsx = React.createElement;

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_head["default"], null, /*#__PURE__*/React.createElement("title", null, "WEDO Market"), /*#__PURE__*/React.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "author",
    content: "Kaio B. Gama"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/React.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"
  }), /*#__PURE__*/React.createElement("script", {
    type: "text/javascript",
    src: "jscript/graph.js"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "/path/to/flickity.css",
    media: "screen"
  }), /*#__PURE__*/React.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"
  }), /*#__PURE__*/React.createElement("script", {
    src: "https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js"
  })), /*#__PURE__*/React.createElement("body", {
    className: "h-screen w-screen"
  }, /*#__PURE__*/React.createElement(_navbar["default"], null), children, /*#__PURE__*/React.createElement(_footer["default"], null), /*#__PURE__*/React.createElement("script", {
    src: "/path/to/flickity.pkgd.min.js"
  })));
};

Layout.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = Layout;
exports["default"] = _default;