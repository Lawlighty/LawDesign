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
 * @Date: 2022-08-17 15:33:11
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 11:29:18
 * @FilePath: \lawDesgin\src\Table\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (props) {
  var _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
      border = props.border,
      center = props.center,
      dark = props.dark,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      columnsList = _useState2[0],
      setColumnsList = _useState2[1];

  useEffect(function () {
    var columnsList = columns.map(function (item) {
      return item.key;
    });
    setColumnsList(_toConsumableArray(columnsList));
    return function () {};
  }, [columns]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "nes-table-responsive",
      children: /*#__PURE__*/_jsxs("table", {
        className: "nes-table ".concat(border && "is-bordered", " ").concat(center && "is-centered", " ").concat(dark && "is-dark"),
        children: [/*#__PURE__*/_jsx("thead", {
          children: /*#__PURE__*/_jsx("tr", {
            children: columns.map(function (item) {
              return /*#__PURE__*/_jsx("th", {
                style: item.width ? {
                  width: "".concat(item.width, "px")
                } : {},
                children: item.title
              }, item.key);
            })
          })
        }), /*#__PURE__*/_jsx("tbody", {
          children: dataSource.map(function (item) {
            return /*#__PURE__*/_jsx("tr", {
              children: columnsList.map(function (cItem) {
                var _item$cItem;

                return /*#__PURE__*/_jsx("td", {
                  children: (_item$cItem = item === null || item === void 0 ? void 0 : item[cItem]) !== null && _item$cItem !== void 0 ? _item$cItem : ''
                }, cItem);
              })
            }, item[rowKey]);
          })
        })]
      })
    })
  });
});