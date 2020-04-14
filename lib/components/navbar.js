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

var Navbar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Navbar, _React$Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    (0, _classCallCheck2["default"])(this, Navbar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Navbar, [{
    key: "render",
    value: function render() {
      var data = {
        logo_src: "/logo-Wedo-mini.png",
        logo_name: "WEDO MARKET",
        menu_hamburguer: "menu",
        shopping_cart: "shopping_basket"
      };
      return /*#__PURE__*/React.createElement("nav", {
        className: "flex justify-between overflow-hidden h-16 bg-default shadow-xl px-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React.createElement("button", {
        className: "material-icons bg-transparent text-white ounded-full h-10 w-10"
      }, data.menu_hamburguer)), /*#__PURE__*/React.createElement("div", {
        className: "flex  overflow-hidden items-center"
      }, /*#__PURE__*/React.createElement("img", {
        className: "w-32",
        src: data.logo_src,
        alt: data.logo_name
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React.createElement("button", {
        className: "material-icons bg-transparent text-white ounded-full h-10 w-10"
      }, data.shopping_cart)));
    }
  }]);
  return Navbar;
}(React.Component);

var _default = Navbar;
exports["default"] = _default;