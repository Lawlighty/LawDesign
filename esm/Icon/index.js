import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var ICON_LIST = ['mario', 'ash', 'pokeball', 'bulbasaur', 'charmander', 'squirtle', 'kirby'];
export default (function (props) {
  var icon = props.icon,
      _props$size = props.size,
      size = _props$size === void 0 ? '' : _props$size,
      _props$transparent = props.transparent,
      transparent = _props$transparent === void 0 ? false : _props$transparent,
      _props$half = props.half,
      half = _props$half === void 0 ? false : _props$half,
      _props$empty = props.empty,
      empty = _props$empty === void 0 ? false : _props$empty;
  return /*#__PURE__*/_jsx("i", {
    className: "".concat(ICON_LIST.includes(icon) ? "nes-".concat(icon) : "nes-icon ".concat(icon), " ").concat(size && "is-".concat(size), "  ").concat(transparent && 'is-transparent', " ").concat(half && 'is-half', " ").concat(empty && 'is-empty')
  });
});