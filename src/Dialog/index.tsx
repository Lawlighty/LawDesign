import React, { ReactNode } from 'react';
import Button from '../Button';

interface DialogProps {
  title?: string;
  okText?: string;
  onOk?: React.FC;
  cancelText?: string;
  onCancel?: React.FC;
  footer?: ReactNode;
  dark?: boolean;
  round?: boolean;
  children: ReactNode;
}

export default (props: DialogProps) => {
  const {
    title,
    okText,
    onOk = () => {},
    cancelText,
    onCancel = () => {},
    dark,
    round,
    footer,
    children,
  } = props;

  const DefaultFooter = () => (
    <menu className="dialog-menu">
      <Button onClick={onOk}> {cancelText || '取消'}</Button>
      <Button type="primary" onClick={onCancel}>
        {okText || '确定'}
      </Button>
    </menu>
  );
  return (
    <>
      <dialog
        className={`nes-dialog ${dark && 'is-dark'} ${round && 'is-round'} `}
      >
        <form method="dialog">
          {title && <p className="title">{title}</p>}

          <div>{children}</div>
          {footer === null && <></>}
          {footer ? <>{footer}</> : <DefaultFooter />}
        </form>
      </dialog>
    </>
  );
};
