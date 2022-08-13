import React, { useRef, useState } from 'react'
import styles from './index.less'
import Draggable from 'react-draggable'
import 'nes.css/css/nes.min.css'

const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const draggleRef = useRef<any>(null)

  // 边界设置
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  })

  const onStart = (event: React.ReactDOM, uiData: any) => {
    console.log('uiData', uiData)
    const { clientWidth, clientHeight } = window?.document?.documentElement
    // @ts-ignore
    const targetRect = draggleRef?.current?.getBoundingClientRect()
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    })
  }

  React.useEffect(() => {
    // 监听事件
    document.addEventListener('keydown', keydownHandler)
    // 取消监听
    return () => document.removeEventListener('keydown', keydownHandler)
  })

  function keydownHandler({ key }) {
    // esc 键，关闭模态框
    switch (key) {
      case 'Escape':
        onClose()
        break
      default:
    }
  }
  // 控制模态框显示
  return !isVisible ? null : (
    <div className={styles['modal']} onClick={onClose}>
      <Draggable
        // disabled={disabled}
        bounds={bounds}
        onStart={(event, uiData) => onStart(event, uiData)}
      >
        <div ref={draggleRef}>
          {/* <div className={styles['modal-dialog']} onClick={(e) => e.stopPropagation()}>
            <div className={styles['modal-header']}>
              <h3 className={styles['modal-title']}>{title}</h3>
              <span className={styles['modal-close']} onClick={onClose}>
                &times;
              </span>
            </div>
            <div className={styles['modal-body']}>
              <div className={styles['modal-content']}>{content}</div>
            </div>
            {footer && <div className={styles['modal-footer']}>{footer}</div>}
          </div> */}
          <dialog className="nes-dialog" id="dialog-default">
            <form method="dialog">
              <p className="title">Dialog</p>
              <p>Alert: this is a dialog.</p>
              <menu className="dialog-menu">
                <button className="nes-btn">Cancel</button>
                <button className="nes-btn is-primary">Confirm</button>
              </menu>
            </form>
          </dialog>
        </div>
      </Draggable>
    </div>
  )
}

export default Modal
