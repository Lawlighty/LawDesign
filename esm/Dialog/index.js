import React from 'react';
import Button from "../Button";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var title = props.title,
      okText = props.okText,
      _props$onOk = props.onOk,
      onOk = _props$onOk === void 0 ? function () {} : _props$onOk,
      cancelText = props.cancelText,
      _props$onCancel = props.onCancel,
      onCancel = _props$onCancel === void 0 ? function () {} : _props$onCancel,
      dark = props.dark,
      round = props.round,
      footer = props.footer,
      children = props.children;

  var DefaultFooter = function DefaultFooter() {
    return /*#__PURE__*/_jsxs("menu", {
      className: "dialog-menu",
      children: [/*#__PURE__*/_jsxs(Button, {
        onClick: onOk,
        children: [" ", cancelText || '取消']
      }), /*#__PURE__*/_jsx(Button, {
        type: "primary",
        onClick: onCancel,
        children: okText || '确定'
      })]
    });
  };

  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("dialog", {
      className: "nes-dialog ".concat(dark && 'is-dark', " ").concat(round && 'is-round', " "),
      children: /*#__PURE__*/_jsxs("form", {
        method: "dialog",
        children: [title && /*#__PURE__*/_jsx("p", {
          className: "title",
          children: title
        }), /*#__PURE__*/_jsx("div", {
          children: children
        }), footer === null && /*#__PURE__*/_jsx(_Fragment, {}), footer ? /*#__PURE__*/_jsx(_Fragment, {
          children: footer
        }) : /*#__PURE__*/_jsx(DefaultFooter, {})]
      })
    })
  });
});