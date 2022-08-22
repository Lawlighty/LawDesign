/*
 * @Date: 2022-08-18 13:23:49
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 13:28:57
 * @FilePath: \lawDesgin\src\Balloon\index.tsx
 * @Description: Balloon 对话框
 */
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'left' : _props$direction,
      dark = props.dark,
      _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "nes-balloon from-".concat(direction, " ").concat(dark && 'is-dark'),
      children: children
    })
  });
});