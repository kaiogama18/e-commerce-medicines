"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
import React from "react";
var __jsx = React.createElement;

function ImgBanner(props) {
  return props.img.map(function (aux) {
    return /*#__PURE__*/React.createElement("img", {
      key: aux.id,
      className: "gallery-cell mx-2",
      src: aux.src,
      alt: aux.name,
      draggable: "false"
    });
  });
}

var Banner = function Banner() {
  var data = [{
    id: "001",
    name: "banner generico",
    src: "/banner-generico.jpg"
  }, {
    id: "002",
    name: "banner generico",
    src: "/banner-generico.jpg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "flex items-center justify-center overflow-hidden mb-5 main-gallery"
  }, /*#__PURE__*/React.createElement(ImgBanner, {
    img: data
  }));
};

var _default = Banner;
exports["default"] = _default;