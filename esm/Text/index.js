import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children;
  return /*#__PURE__*/_jsx("span", {
    className: "nes-text ".concat(type ? "is-".concat(type) : ''),
    children: children
  });
});