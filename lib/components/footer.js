"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
import React from "react";
var __jsx = React.createElement;

var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "flex flex-col overflow-hidden items-center bg-default shadow-xl pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col rounded-md items-center text-center bg-white p-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-black font-bold"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "flex pt-2"
  }, mobile.map(function (aux) {
    return /*#__PURE__*/React.createElement("img", {
      key: aux.id,
      className: "w-32 h-12 mr-2",
      src: aux.src,
      alt: aux.alt
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center bg-black w-screen mt-3 p-1"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-8 mr-2",
    src: "/insta.png"
  }), img_social.map(function (aux) {
    return /*#__PURE__*/React.createElement("img", {
      key: aux.id,
      className: "w-4 h-4 mr-2",
      src: aux.src,
      alt: aux.alt
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white mt-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs mb-1"
  }, copyright)));
};

var _default = Footer;
exports["default"] = _default;
var title = "Nosso Aplicativo";
var copyright = "WEDO MARKET @ 2020 - Todos direitos reservados";
var mobile = [{
  id: "01",
  alt: "Google PLay",
  src: "/googleP.png"
}, {
  id: "02",
  alt: "Apple Store",
  src: "/appleS.png"
}];
var img_social = [{
  id: "01",
  alt: "whatsapp",
  src: "/what.png"
}, {
  id: "03",
  alt: "whatsapp",
  src: "/tw.png"
}];