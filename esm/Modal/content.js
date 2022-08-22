function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Date: 2022-08-15 08:44:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 15:39:05
 * @FilePath: \lawDesgin\src\Modal\content.tsx
 * @Description:
 */
import React, { useRef, useState } from 'react';
import styles from "./index.less";
import Draggable from 'react-draggable';
import 'nes.css/css/nes.min.css';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Modal = function Modal(_ref) {
  var _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === void 0 ? false : _ref$isVisible,
      title = _ref.title,
      content = _ref.content,
      footer = _ref.footer,
      onClose = _ref.onClose;
  var draggleRef = useRef(null); // 边界设置

  var _useState = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      bounds = _useState2[0],
      setBounds = _useState2[1];

  var _onStart = function onStart(event, uiData) {
    var _window, _window$document, _draggleRef$current;

    console.log('uiData', uiData);

    var _window$document$docu = (_window = window) === null || _window === void 0 ? void 0 : (_window$document = _window.document) === null || _window$document === void 0 ? void 0 : _window$document.documentElement,
        clientWidth = _window$document$docu.clientWidth,
        clientHeight = _window$document$docu.clientHeight; // @ts-ignore


    var targetRect = draggleRef === null || draggleRef === void 0 ? void 0 : (_draggleRef$current = draggleRef.current) === null || _draggleRef$current === void 0 ? void 0 : _draggleRef$current.getBoundingClientRect();
    setBounds({
      left: -(targetRect === null || targetRect === void 0 ? void 0 : targetRect.left) + (uiData === null || uiData === void 0 ? void 0 : uiData.x),
      right: clientWidth - ((targetRect === null || targetRect === void 0 ? void 0 : targetRect.right) - (uiData === null || uiData === void 0 ? void 0 : uiData.x)),
      top: -(targetRect === null || targetRect === void 0 ? void 0 : targetRect.top) + (uiData === null || uiData === void 0 ? void 0 : uiData.y),
      bottom: clientHeight - ((targetRect === null || targetRect === void 0 ? void 0 : targetRect.bottom) - (uiData === null || uiData === void 0 ? void 0 : uiData.y))
    });
  };

  function keydownHandler(_ref2) {
    var key = _ref2.key;

    // esc 键，关闭模态框
    switch (key) {
      case 'Escape':
        onClose();
        break;

      default:
    }
  }

  React.useEffect(function () {
    // 监听事件
    document.addEventListener('keydown', keydownHandler); // 取消监听

    return function () {
      return document.removeEventListener('keydown', keydownHandler);
    };
  }); // 控制模态框显示

  return !isVisible ? null : /*#__PURE__*/_jsx("div", {
    className: styles['modal'],
    onClick: onClose,
    children: /*#__PURE__*/_jsx(Draggable // disabled={disabled}
    , {
      bounds: bounds,
      onStart: function onStart(event, uiData) {
        return _onStart(event, uiData);
      },
      children: /*#__PURE__*/_jsx("div", {
        ref: draggleRef,
        children: /*#__PURE__*/_jsx("dialog", {
          className: "nes-dialog",
          id: "dialog-default",
          children: /*#__PURE__*/_jsxs("form", {
            method: "dialog",
            children: [/*#__PURE__*/_jsx("p", {
              className: "title",
              children: "Dialog"
            }), /*#__PURE__*/_jsx("p", {
              children: "Alert: this is a dialog."
            }), /*#__PURE__*/_jsxs("menu", {
              className: "dialog-menu",
              children: [/*#__PURE__*/_jsx("button", {
                className: "nes-btn",
                children: "Cancel"
              }), /*#__PURE__*/_jsx("button", {
                className: "nes-btn is-primary",
                children: "Confirm"
              })]
            })]
          })
        })
      })
    })
  });
};

export default Modal;