import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick;
  return /*#__PURE__*/_jsx("button", {
    type: "button",
    className: "nes-btn is-".concat(type),
    onClick: onClick,
    children: /*#__PURE__*/_jsx("div", {
      className: "flex-r-a-c",
      children: children
    })
  });
});