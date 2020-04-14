"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
import React from "react";
var __jsx = React.createElement;

var Delivery = function Delivery() {
  var data = {
    tile: "Entrega somente para Manaus",
    subtitle: "Pagamento à vista através de boleto bancário possui 7% de desconto"
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "flex flex-col p-3 overflow-hidden items-center text-center bg-default mb-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-xs text-white font-bold uppercase"
  }, " ", data.tile, " "), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-xs text-white uppercase"
  }, " ", data.subtitle, " "));
};

var _default = Delivery;
exports["default"] = _default;