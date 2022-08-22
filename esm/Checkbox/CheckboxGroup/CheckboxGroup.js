function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Date: 2022-08-15 16:22:45
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 16:14:45
 * @FilePath: \lawDesgin\src\Checkbox\CheckboxGroup\CheckboxGroup.tsx
 * @Description:
 */
import React, { useState, memo } from 'react';
import styles from "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var CheckboxGroup = function CheckboxGroup(props) {
  var children = props.children,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? false : _props$vertical,
      options = props.options,
      onChange = props.onChange;
  console.log('CheckboxGroup cOptions', options);

  var _useState = useState(_toConsumableArray(value)),
      _useState2 = _slicedToArray(_useState, 2),
      selectIndex = _useState2[0],
      setSelectIndex = _useState2[1]; // 选中索引


  var _useState3 = useState(options !== null && options !== void 0 ? options : []),
      _useState4 = _slicedToArray(_useState3, 2),
      cOptions = _useState4[0],
      setCOptions = _useState4[1];

  var _useState5 = useState(children),
      _useState6 = _slicedToArray(_useState5, 2),
      renderOptions = _useState6[0],
      setRenderOptions = _useState6[1];

  var handleChange = function handleChange(event, item, index) {
    var _e$target, _e$target$attributes, _e$target$attributes$;

    if (item.disabled) return;
    var e = event;
    var value = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$attributes = _e$target.attributes) === null || _e$target$attributes === void 0 ? void 0 : (_e$target$attributes$ = _e$target$attributes.value) === null || _e$target$attributes$ === void 0 ? void 0 : _e$target$attributes$.value;
    event.persist();
    console.log('handleChange value', value);
    console.log('handleChange e', e);
    event && event.stopPropagation();

    var cList = _toConsumableArray(selectIndex);

    if (event.target.checked) {
      setSelectIndex([].concat(_toConsumableArray(cList), [value !== null && value !== void 0 ? value : index]));
    } else {
      var i = cList.indexOf(index);
      cList.splice(i, 1);
      setSelectIndex(_toConsumableArray(cList));
    }

    onChange && onChange(cList);
  };

  return /*#__PURE__*/_jsx("div", {
    className: "".concat(styles['checkbox-group-wrapper'], " ").concat(vertical && styles['vertical-wrapper']),
    children: cOptions.length ? /*#__PURE__*/_jsx(_Fragment, {
      children: cOptions.map(function (item, index) {
        var _value;

        var value;
        var label;
        var disabled = false;

        if (item && _typeof(item) === 'object') {
          var _item$disabled;

          // Option
          value = item === null || item === void 0 ? void 0 : item['value'];
          label = item === null || item === void 0 ? void 0 : item['label'];
          disabled = (_item$disabled = item === null || item === void 0 ? void 0 : item['disabled']) !== null && _item$disabled !== void 0 ? _item$disabled : false;
        } else {
          value = item;
          label = item;
        }

        return /*#__PURE__*/_jsxs("label", {
          className: "".concat(styles['checkbox-group-wrapper-label']),
          // onClick={(e) => changeOptions(item.props, index, e)}
          style: disabled ? {
            cursor: 'not-allowed'
          } : {},
          children: [/*#__PURE__*/_jsx("input", {
            value: value,
            style: disabled ? {
              cursor: 'not-allowed'
            } : {},
            type: "checkbox",
            className: "nes-checkbox",
            checked: selectIndex.includes((_value = value) !== null && _value !== void 0 ? _value : index),
            onChange: function onChange(e) {
              handleChange(e, item, index);
            }
          }), /*#__PURE__*/_jsx("span", {
            style: disabled ? {
              cursor: 'not-allowed',
              color: 'gray'
            } : {},
            children: label
          })]
        }, value);
      })
    }) : /*#__PURE__*/_jsx(_Fragment, {
      children: renderOptions.map(function (item, index) {
        var _item$props, _item$props$children, _item$props2, _item$props3;

        return /*#__PURE__*/_jsxs("label", {
          className: "".concat(styles['checkbox-group-wrapper-label']),
          // onClick={(e) => changeOptions(item.props, index, e)}
          style: item.props.disabled && {
            cursor: 'not-allowed'
          },
          children: [/*#__PURE__*/_jsx("input", {
            value: item === null || item === void 0 ? void 0 : (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.children,
            style: item.props.disabled && {
              cursor: 'not-allowed'
            },
            type: "checkbox",
            className: "nes-checkbox ".concat(item.props.dark && 'is-dark'),
            checked: selectIndex.includes((_item$props$children = item === null || item === void 0 ? void 0 : (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.children) !== null && _item$props$children !== void 0 ? _item$props$children : index),
            onChange: function onChange(e) {
              handleChange(e, item.props, index);
            }
          }), /*#__PURE__*/_jsx("span", {
            style: item.props.disabled && {
              cursor: 'not-allowed',
              color: 'gray'
            },
            children: item === null || item === void 0 ? void 0 : (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.children
          })]
        }, index);
      })
    })
  });
};

export default /*#__PURE__*/memo(CheckboxGroup);