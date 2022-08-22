/*
 * @Date: 2022-08-16 18:41:33
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 08:49:02
 * @FilePath: \lawDesgin\src\Select\index.tsx
 * @Description:
 */
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var type = props.type,
      value = props.value,
      width = props.width,
      options = props.options,
      children = props.children,
      onChange = props.onChange;

  var handleChange = function handleChange(e) {
    onChange && onChange(e.target.value);
  };

  return /*#__PURE__*/_jsx("div", {
    className: "nes-select ".concat(type && "is-".concat(type)),
    style: width ? {
      width: "".concat(width, "px")
    } : {},
    children: /*#__PURE__*/_jsx("select", {
      onChange: handleChange,
      value: value,
      children: options !== null && options !== void 0 && options.length ? /*#__PURE__*/_jsx(_Fragment, {
        children: options.map(function (item) {
          return /*#__PURE__*/_jsx("option", {
            value: item.value,
            disabled: item.disabled,
            hidden: item.hidden,
            selected: item.selected,
            children: item.label
          }, item.value);
        })
      }) : /*#__PURE__*/_jsx(_Fragment, {
        children: children
      })
    })
  });
});