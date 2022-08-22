function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Date: 2022-08-15 08:44:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 15:40:38
 * @FilePath: \lawDesgin\src\Radio\index.tsx
 * @Description:
 */
import React, { useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (props) {
  var _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children; // eslint-disable-next-line  @typescript-eslint/no-unused-vars

  var _useState = useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var handleChange = function handleChange(event) {
    var _event$target;

    console.log('handleChange event', event.target.value);

    if (!(event !== null && event !== void 0 && (_event$target = event.target) !== null && _event$target !== void 0 && _event$target.value)) {
      setIsChecked(true);
    }
  };

  var handleClick = function handleClick(event) {
    console.log('handleClick event', event.target.value);
  };

  return /*#__PURE__*/_jsxs("label", {
    children: [/*#__PURE__*/_jsx("input", {
      type: "radio",
      className: "nes-radio",
      checked: false,
      onChange: handleChange,
      onClick: handleClick
    }), /*#__PURE__*/_jsx("span", {
      children: children
    })]
  });
});