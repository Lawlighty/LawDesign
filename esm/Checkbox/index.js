/*
 * @Date: 2022-08-15 16:28:25
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 14:34:05
 * @FilePath: \lawDesgin\src\Checkbox\index.tsx
 * @Description:
 */
import React, { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var Checkbox = function Checkbox(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$dark = props.dark,
      dark = _props$dark === void 0 ? false : _props$dark,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("label", {
      // className={`${styles['checkbox-wrapper-label']}`}
      // onClick={(e) => changeOptions(item.props, index, e)}
      style: disabled ? {
        cursor: 'not-allowed'
      } : {},
      children: [/*#__PURE__*/_jsx("input", {
        style: disabled ? {
          cursor: 'not-allowed'
        } : {},
        type: "checkbox",
        className: "nes-checkbox ".concat(dark && 'is-dark'),
        checked: checked,
        onChange: onChange
      }), /*#__PURE__*/_jsx("span", {
        style: disabled ? {
          cursor: 'not-allowed',
          color: 'gray'
        } : {},
        children: children
      })]
    })
  });
};

export default /*#__PURE__*/memo(Checkbox);