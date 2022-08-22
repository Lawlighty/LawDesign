function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Date: 2022-08-15 08:44:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 16:28:00
 * @FilePath: \lawDesgin\src\Radio\RadioGroup\RadioGroup.tsx
 * @Description:
 */
import React, { useState, memo } from 'react';
import styles from "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var RadioGroup = function RadioGroup(props) {
  var children = props.children,
      value = props.value,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? false : _props$vertical,
      onChange = props.onChange;

  var _useState = useState(value || 0),
      _useState2 = _slicedToArray(_useState, 2),
      selectIndex = _useState2[0],
      setSelectIndex = _useState2[1]; // 选中索引


  var _useState3 = useState(children),
      _useState4 = _slicedToArray(_useState3, 2),
      renderOptions = _useState4[0],
      setRenderOptions = _useState4[1];

  var changeOptions = function changeOptions(item, i, e) {
    if (item.disabled) return;
    e && e.stopPropagation();
    setSelectIndex(i);
    onChange && onChange(item, i);
  };

  var handleChange = function handleChange(event) {
    console.log('handleClick event', event.target.value);
  };

  return /*#__PURE__*/_jsx("div", {
    className: "".concat(styles['radio-group-wrapper'], " ").concat(vertical && styles['vertical-wrapper']),
    children: renderOptions.map(function (item, index) {
      var _item$props;

      return /*#__PURE__*/_jsxs("label", {
        className: "".concat(styles['radio-group-wrapper-label']),
        onClick: function onClick(e) {
          return changeOptions(item.props, index, e);
        },
        style: item.props.disabled && {
          cursor: 'not-allowed'
        },
        children: [/*#__PURE__*/_jsx("input", {
          style: item.props.disabled && {
            cursor: 'not-allowed'
          },
          type: "radio",
          className: "nes-radio ".concat(item.props.dark && 'is-dark'),
          checked: selectIndex === index,
          onChange: handleChange
        }), /*#__PURE__*/_jsx("span", {
          style: item.props.disabled && {
            cursor: 'not-allowed',
            color: 'gray'
          },
          children: item === null || item === void 0 ? void 0 : (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.children
        })]
      }, index);
    })
  });
};

export default /*#__PURE__*/memo(RadioGroup);