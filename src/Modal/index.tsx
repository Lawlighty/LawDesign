/*
 * @Date: 2022-08-12 15:32:30
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-12 16:36:48
 * @FilePath: \lawDesgin\src\Modal\index.tsx
 * @Description:
 */
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const LNModal = () => {
  const modalRef = useRef<any>(null);
  const draggleRef = useRef<any>(null);
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState<boolean>(false);

  // 边界设置
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const onStart = (event: React.ReactDOM, uiData: any) => {
    console.log('uiData', uiData);
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    // @ts-ignore
    const targetRect = draggleRef?.current?.getBoundingClientRect();
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    });
  };

  return (
    <div>
      <Draggable>
        <div>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => {
              // document.getElementById('dialog-default').showModal();
              setVisible(true);
            }}
          >
            Open dialog
          </button>
        </div>
      </Draggable>

      <Modal
        // title={
        //   <div
        //     style={{
        //       width: '100%',
        //       cursor: 'move',
        //       minHeight: '22px',
        //     }}
        //     onMouseOver={() => {
        //       if (disabled) {
        //         setDisabled(false);
        //       }
        //     }}
        //     onMouseOut={() => {
        //       setDisabled(true);
        //     }}
        //     onFocus={() => {}}
        //     onBlur={() => {}}
        //   >
        //     这是标题
        //   </div>
        // }
        visible={visible}
        onOk={() => {}}
        onCancel={() => {}}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      ></Modal>
    </div>
  );
};

export default LNModal;
