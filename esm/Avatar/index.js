import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var alt = props.alt,
      src = props.src,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      round = props.round;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("img", {
      className: "nes-avatar ".concat(round && 'is-rounded', " ").concat(size && "is-".concat(size)),
      alt: alt,
      src: src,
      style: {
        imageRendering: 'pixelated'
      }
    })
  });
});