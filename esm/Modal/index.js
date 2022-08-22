function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Date: 2022-08-12 15:32:30
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-12 16:36:48
 * @FilePath: \lawDesgin\src\Modal\index.tsx
 * @Description:
 */
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
// import 'antd/dist/antd.css';
import 'nes.css/css/nes.min.css';
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var App = function App() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var modalRef = useRef(null);
  var draggleRef = useRef(null);

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1]; // 边界设置


  var _useState5 = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      bounds = _useState6[0],
      setBounds = _useState6[1];

  var onStart = function onStart(event, uiData) {
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

  var showModal = function showModal() {
    var _document, _document$getElementB, _document$getElementB2;

    setVisible(true);
    (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById('dialog-default')) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.showModal) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.call(_document$getElementB);
  };

  var handleOk = function handleOk(e) {
    console.log(e);
    setVisible(false);
  };

  var handleCancel = function handleCancel(e) {
    console.log(e);
    setVisible(false);
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: showModal,
      children: "Open Modal"
    }), /*#__PURE__*/_jsx("dialog", {
      className: "nes-dialog",
      id: "dialog-default",
      children: /*#__PURE__*/_jsxs("form", {
        method: "dialog",
        children: [/*#__PURE__*/_jsx("p", {
          className: "title",
          children: "Dialog"
        }), /*#__PURE__*/_jsx("p", {
          children: "Alert: this is a dialog."
        }), /*#__PURE__*/_jsx("button", {
          className: "nes-btn",
          children: "Cancel"
        }), /*#__PURE__*/_jsx("button", {
          className: "nes-btn is-primary",
          children: "Confirm"
        })]
      })
    })]
  });
};

export default (function () {
  return /*#__PURE__*/_jsx(App, {});
}); // import Draggable from 'react-draggable';
// import { Modal } from 'antd';
// import 'antd/dist/antd.css';
// const LNModal = () => {
//   const modalRef = useRef<any>(null);
//   const draggleRef = useRef<any>(null);
//   const [disabled, setDisabled] = useState(true);
//   const [visible, setVisible] = useState<boolean>(false);
//   // 边界设置
//   const [bounds, setBounds] = useState({
//     left: 0,
//     top: 0,
//     bottom: 0,
//     right: 0,
//   });
//   const onStart = (event: React.ReactDOM, uiData: any) => {
//     console.log('uiData', uiData);
//     const { clientWidth, clientHeight } = window?.document?.documentElement;
//     // @ts-ignore
//     const targetRect = draggleRef?.current?.getBoundingClientRect();
//     setBounds({
//       left: -targetRect?.left + uiData?.x,
//       right: clientWidth - (targetRect?.right - uiData?.x),
//       top: -targetRect?.top + uiData?.y,
//       bottom: clientHeight - (targetRect?.bottom - uiData?.y),
//     });
//   };
//   return (
//     <div>
//       <Draggable>
//         <div>
//           <button
//             type="button"
//             className="nes-btn is-primary"
//             onClick={() => {
//               // document.getElementById('dialog-default').showModal();
//               setVisible(true);
//             }}
//           >
//             Open dialog
//           </button>
//         </div>
//       </Draggable>
//       <Modal
//         // title={
//         //   <div
//         //     style={{
//         //       width: '100%',
//         //       cursor: 'move',
//         //       minHeight: '22px',
//         //     }}
//         //     onMouseOver={() => {
//         //       if (disabled) {
//         //         setDisabled(false);
//         //       }
//         //     }}
//         //     onMouseOut={() => {
//         //       setDisabled(true);
//         //     }}
//         //     onFocus={() => {}}
//         //     onBlur={() => {}}
//         //   >
//         //     这是标题
//         //   </div>
//         // }
//         visible={visible}
//         onOk={() => {}}
//         onCancel={() => {}}
//         modalRender={(modal) => (
//           <Draggable
//             disabled={disabled}
//             bounds={bounds}
//             onStart={(event, uiData) => onStart(event, uiData)}
//           >
//             <div ref={draggleRef}>{modal}</div>
//           </Draggable>
//         )}
//       ></Modal>
//     </div>
//   );
// };
// export default LNModal;