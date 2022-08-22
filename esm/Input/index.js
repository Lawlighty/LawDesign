/*
 * @Date: 2022-08-16 08:38:23
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 16:38:22
 * @FilePath: \lawDesgin\src\Input\index.tsx
 * @Description:
 */
import React from 'react'; // import ButtonProps from './type.ts';

import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$password = props.password,
      password = _props$password === void 0 ? false : _props$password,
      _props$dark = props.dark,
      dark = _props$dark === void 0 ? false : _props$dark,
      _props$textarea = props.textarea,
      textarea = _props$textarea === void 0 ? false : _props$textarea,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 4 : _props$rows,
      _props$width = props.width,
      width = _props$width === void 0 ? null : _props$width,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === void 0 ? function () {} : _props$onChange;

  return /*#__PURE__*/_jsx(_Fragment, {
    children: textarea ? /*#__PURE__*/_jsx("textarea", {
      value: value,
      placeholder: placeholder,
      style: width ? {
        width: "".concat(width, "px")
      } : {},
      className: "nes-textarea ".concat(type && "is-".concat(type), " ").concat(dark && "is-dark"),
      rows: rows,
      onChange: function onChange(e) {
        _onChange(e);
      }
    }) : /*#__PURE__*/_jsx("input", {
      type: password ? 'password' : 'text',
      value: value,
      placeholder: placeholder,
      style: width ? {
        width: "".concat(width, "px")
      } : {},
      className: "nes-input ".concat(type && "is-".concat(type), " ").concat(dark && "is-dark"),
      onChange: function onChange(e) {
        _onChange(e);
      }
    })
  });
});