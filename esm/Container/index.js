/*
 * @Date: 2022-08-17 14:39:30
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 15:00:00
 * @FilePath: \lawDesgin\src\Container\index.tsx
 * @Description:
 */
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      center = props.center,
      round = props.round,
      dark = props.dark,
      children = props.children;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "nes-container ".concat(title && 'with-title', " ").concat(center && 'is-centered', " ").concat(round && 'is-rounded', " ").concat(dark && 'is-dark'),
      children: [title && /*#__PURE__*/_jsx("div", {
        className: "title",
        children: title
      }), children]
    })
  });
});