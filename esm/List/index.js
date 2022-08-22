/*
 * @Date: 2022-08-17 15:18:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 15:29:42
 * @FilePath: \lawDesgin\src\List\index.tsx
 * @Description:
 */
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$type = props.type,
      type = _props$type === void 0 ? 'disc' : _props$type;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "lists",
      children: /*#__PURE__*/_jsx("ul", {
        className: "nes-list is-".concat(type),
        children: dataSource.map(function (item, index) {
          return /*#__PURE__*/_jsx("li", {
            children: item
          }, index);
        })
      })
    })
  });
});