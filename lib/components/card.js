"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

import React from "react";
var __jsx = React.createElement;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CardProduct(props) {
  return props.product.map(function (aux) {
    var btn = "Saiba Mais";
    return /*#__PURE__*/React.createElement("div", {
      key: aux.id,
      className: "flex flex-col max-w-mdrounded overflow-hidden items-center text-center"
    }, /*#__PURE__*/React.createElement("img", {
      className: "w-32",
      src: aux.src,
      alt: aux.name
    }), /*#__PURE__*/React.createElement("div", {
      className: "py-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold mb-2"
    }, " ", aux.name, " "), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, " ", /*#__PURE__*/React.createElement("a", {
      className: "text-xs font-bold"
    }, "R$:"), aux.price, " "), /*#__PURE__*/React.createElement("div", {
      className: " py-4"
    }, /*#__PURE__*/React.createElement("button", {
      className: "bg-teal-500 hover:bg-teal-700 text-sm text-white py-1 px-6 rounded"
    }, btn))));
  });
}

var Card = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card() {
    (0, _classCallCheck2["default"])(this, Card);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Card, [{
    key: "render",
    value: function render() {
      var data = [{
        id: "001",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90"
      }, {
        id: "002",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90"
      }, {
        id: "003",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90"
      }, {
        id: "004",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90"
      }];
      return /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4"
      }, /*#__PURE__*/React.createElement(CardProduct, {
        product: data
      }));
    }
  }]);
  return Card;
}(React.Component);

var _default = Card;
exports["default"] = _default;