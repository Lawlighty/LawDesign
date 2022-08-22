import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var type = props.type,
      value = props.value,
      max = props.max;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("progress", {
      className: "nes-progress ".concat(type && "is-".concat(type)),
      value: value,
      max: max
    })
  });
});