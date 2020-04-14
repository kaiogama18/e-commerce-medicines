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

var _layout = _interopRequireDefault(require("../components/layout"));

var _search = _interopRequireDefault(require("../components/search"));

var _category = _interopRequireDefault(require("../components/category"));

var _banner = _interopRequireDefault(require("../components/banner"));

var _delivery = _interopRequireDefault(require("../components/delivery"));

var _card = _interopRequireDefault(require("../components/card"));

import React from "react";
var __jsx = React.createElement;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Index = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    (0, _classCallCheck2["default"])(this, Index);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Index, [{
    key: "render",
    value: function render() {
      var data = {
        tile: 'Prorrogado!',
        subtitle: ' Melhores Ofertas da Semana'
      };
      return /*#__PURE__*/React.createElement(_layout["default"], null, /*#__PURE__*/React.createElement("div", {
        className: "py-5"
      }, /*#__PURE__*/React.createElement(_search["default"], null), /*#__PURE__*/React.createElement(_category["default"], null), /*#__PURE__*/React.createElement(_banner["default"], null), /*#__PURE__*/React.createElement(_delivery["default"], null), /*#__PURE__*/React.createElement("div", {
        className: "mx-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-center mb-5"
      }, /*#__PURE__*/React.createElement("a", {
        className: "text-teal-500"
      }, data.tile), " ", data.subtitle), /*#__PURE__*/React.createElement(_card["default"], null))));
    }
  }]);
  return Index;
}(React.Component);

var _default = Index;
exports["default"] = _default;