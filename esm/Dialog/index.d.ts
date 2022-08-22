import React, { ReactNode } from 'react';
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
declare const _default: (props: DialogProps) => JSX.Element;
export default _default;
