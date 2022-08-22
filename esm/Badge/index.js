/*
 * @Date: 2022-08-18 09:37:11
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 13:21:17
 * @FilePath: \lawDesgin\src\Badge\index.tsx
 * @Description: 徽章
 */
import React, { Fragment } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$type = props.type,
      type = _props$type === void 0 ? 'primary' : _props$type,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("a", {
      className: "nes-badge ".concat(type && "is-".concat(type)),
      onClick: onClick,
      children: options.map(function (item, index) {
        var _item$type = item.type,
            type = _item$type === void 0 ? 'primary' : _item$type,
            icon = item.icon,
            title = item.title;
        return /*#__PURE__*/_jsx(Fragment, {
          children: icon ? /*#__PURE__*/_jsx("span", {
            className: "".concat(type && "is-".concat(type)),
            children: /*#__PURE__*/_jsx("i", {
              className: "nes-icon ".concat(icon, " is-small")
            })
          }) : /*#__PURE__*/_jsx("span", {
            className: "".concat(type && "is-".concat(type)),
            children: title
          })
        }, index);
      })
    })
  });
});